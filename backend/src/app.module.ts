import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';

import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { PostsModule } from './posts/posts.module';
import { ProjectsModule } from './projects/projects.module';
import { ContactModule } from './contact/contact.module';
import { CommentsModule } from './comments/comments.module';
import { GithubModule } from './github/github.module';


@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT || '3306', 10),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      autoLoadEntities: true,        // auto-carrega todas as entities encontradas
      synchronize: true,             // só em dev!
    }),
    AuthModule,
    UsersModule,
    PostsModule,
    ProjectsModule,
    ContactModule,
    CommentsModule,
    GithubModule,
  ],
})
export class AppModule {}
