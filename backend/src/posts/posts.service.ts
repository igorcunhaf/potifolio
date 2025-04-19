import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Post } from './entities/post.entity';
import { User } from '../users/user.entity';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Post)
    private postsRepository: Repository<Post>,
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async create(createPostDto: CreatePostDto, userId: number): Promise<Post> {
    const user = await this.usersRepository.findOne({ where: { id: userId } });
    if (!user) throw new NotFoundException(`User ${userId} not found`);
    const post = this.postsRepository.create({ ...createPostDto, user });
    return this.postsRepository.save(post);
  }

  findAll() {
    return this.postsRepository.find({ relations: ['user'] });
  }

  findOne(id: number) {
    return this.postsRepository.findOne({ where: { id }, relations: ['user'] });
  }

  findBySlug(slug: string) {
    return this.postsRepository.findOne({ where: { slug }, relations: ['user'] });
  }

  async update(id: number, updatePostDto: UpdatePostDto) {
    const post = await this.postsRepository.preload({ id, ...updatePostDto });
    if (!post) throw new NotFoundException(`Post ${id} not found`);
    return this.postsRepository.save(post);
  }

  async remove(id: number) {
    const post = await this.postsRepository.findOne({ where: { id } });
    if (!post) throw new NotFoundException(`Post ${id} not found`);
    return this.postsRepository.remove(post);
  }
}
