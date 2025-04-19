import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommentsController } from './comments.controller';
import { CommentsService } from './comments.service';
import { Comment } from './comment.entity';
import { PostsModule } from '../posts/posts.module';   // Importa PostsModule para ter PostsService disponível

@Module({
  imports: [
    TypeOrmModule.forFeature([Comment]),
    PostsModule,  // Garante que PostsService seja provido
  ],
  controllers: [CommentsController],
  providers: [CommentsService],
  exports: [CommentsService],
})
export class CommentsModule {}
