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
  Inject,
  // ValidationPipe,
} from '@nestjs/common';
import Expression from './model/expression.class';
import { PageStateDto } from './dto/page-state.dto';
import { ValidationPipe } from './validation.pipe';
import { RequestDto } from './dto/request.dto';
import { create } from 'domain';
import { ResourceDto } from './dto/resource.dto';

@Controller('resource')
export class ResourceController {
  constructor(
    private resourceService: ResourceService,
    @Inject('resourceProvider') private readonly resourceProvider:{get:Function ,set:Function},
  ) {}
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
  @Post('create')
  async create(@Body(new ValidationPipe()) resource: ResourceDto){
    return await this.resourceService.save(resource)
  }
  @Get('providers')
  providers (){
    return this.resourceProvider.get()
  }
}
