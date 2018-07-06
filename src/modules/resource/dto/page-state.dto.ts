import { IsString, IsInt } from 'class-validator';
import { Expose } from 'class-transformer';
import { ApiModelProperty } from '@nestjs/swagger';
export class PageStateDto {
  @ApiModelProperty()
  @IsInt() pageNumber: number;
  @ApiModelProperty()
  @IsInt() pageSize: number;
  @Expose()
  get pageMsg() {
    return `pageNumber is ${this.pageNumber};pageSize is ${this.pageSize}`
  }
}
