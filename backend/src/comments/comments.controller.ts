import {
    Controller, Post, Body, Get,
    Param, UseGuards
  } from '@nestjs/common';
  import { JwtAuthGuard } from '../auth/jwt-auth.guard';
  import { CommentsService } from './comments.service';
  import { CreateCommentDto } from './dto/create-comment.dto';
  
  @Controller('posts/:postId/comments')
  export class CommentsController {
    constructor(private commentsService: CommentsService) {}
  
    @Post()
    create(
      @Param('postId') postId: string,
      @Body() dto: CreateCommentDto,
    ) {
      return this.commentsService.create(+postId, dto);
    }
  
    @Get()
    findAll(@Param('postId') postId: string) {
      return this.commentsService.findByPost(+postId);
    }
  }
  