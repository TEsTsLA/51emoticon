import { ResourceService } from './resource.service';
import {
  Controller,
  Post,
  Get,
  Param,
  Query,
  Body,
  UseInterceptors,
  FileInterceptor,
  UploadedFile,
  // ValidationPipe,
} from '@nestjs/common';
import Expression from './model/expression.class';
import { PageStateDto } from './dto/page-state.dto';
import { ValidationPipe } from './validation.pipe';
import { RequestDto } from './dto/request.dto';

@Controller('resource')
export class ResourceController {
  constructor(private resourceService: ResourceService) {}
  @Get('expression/:id')
  list(@Query() query, @Param() param) {
    return {
      statusCode: '0000',
      message: 'OK ',
      error: null,
      data: this.resourceService.getExpressionPath().map(imgUrl => {
        const result = new Expression(
          '标题1',
          imgUrl,
          Math.floor(Math.random() * 10),
          '',
        );
        return result;
      }),
      query_: query,
      param_: param,
    };
  }
  @Post()
  _list(
    @Body(new ValidationPipe())
    request: RequestDto,
  ) {
    return request; 
  }
  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  uploadFile(@UploadedFile() file) {
    console.log(file);
  }
}
