import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Comment } from './comment.entity';
import { CreateCommentDto } from './dto/create-comment.dto';
import { PostsService } from '../posts/posts.service';

@Injectable()
export class CommentsService {
  constructor(
    @InjectRepository(Comment)
    private commentsRepo: Repository<Comment>,
    private postsService: PostsService,
  ) {}

  async create(postId: number, dto: CreateCommentDto) {
    await this.postsService.findOne(postId); // valida se o post existe
    const comment = this.commentsRepo.create({ ...dto, postId });
    return this.commentsRepo.save(comment);
  }

  findByPost(postId: number) {
    return this.commentsRepo.find({
      where: { postId, moderated: true },
      order: { createdAt: 'DESC' },
    });
  }

  // opcional: moderação
  async moderate(id: number) {
    const cm = await this.commentsRepo.preload({ id, moderated: true });
    if (!cm) throw new NotFoundException('Comentário não encontrado');
    return this.commentsRepo.save(cm);
  }
}
