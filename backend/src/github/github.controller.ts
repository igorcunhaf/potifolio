import { Controller, Get, Param } from '@nestjs/common';
import { GithubService } from './github.service';

@Controller('github')
export class GithubController {
  constructor(private githubService: GithubService) {}

  @Get('repos/:username')
  getRepos(@Param('username') username: string) {
    return this.githubService.getUserRepos(username);
  }
}
