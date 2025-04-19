import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { Post } from '../posts/entities/post.entity';
import { OneToMany } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  email: string;

  @Column()
  name: string;

  @Column()
  password: string;

  @OneToMany(() => Post, post => post.user)
  posts: Post[];
}
