import {
    Entity, PrimaryGeneratedColumn,
    Column, CreateDateColumn, ManyToOne, JoinColumn
  } from 'typeorm';
  import { Post } from '../posts/entities/post.entity';
  
  @Entity()
  export class Comment {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    authorName: string;
  
    @Column('text')
    content: string;
  
    @CreateDateColumn()
    createdAt: Date;
  
    @Column()
    postId: number;
  
    @ManyToOne(() => Post, (post) => post.comments, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'postId' })
    post: Post;
  
    @Column({ default: false })
    moderated: boolean;
  }
  