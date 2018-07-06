import { IsString, IsInt } from 'class-validator';
import { Expose } from 'class-transformer';
export class PageStateDto {
  @IsInt() pageNumber: number;
  @IsInt() pageSize: number;
  @Expose()
  get pageMsg() {
    return `pageNumber is ${this.pageNumber};pageSize is ${this.pageSize}`
  }
}
