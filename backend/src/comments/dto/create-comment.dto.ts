import { IsNotEmpty } from 'class-validator';

export class CreateCommentDto {
  @IsNotEmpty()
  authorName: string;

  @IsNotEmpty()
  content: string;
}
