import { IsString } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';

export class LayoutDto {
  @ApiModelProperty()
  @IsString() name: string;
}
