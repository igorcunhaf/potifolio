import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { map } from 'rxjs/operators';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class GithubService {
  constructor(private http: HttpService) {}

  async getUserRepos(username: string) {
    const response$ = this.http
      .get(`https://api.github.com/users/${username}/repos`)
      .pipe(map(res => res.data));
    return lastValueFrom(response$);
  }
}
