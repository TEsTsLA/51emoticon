import {
  Controller,
  Get,
  Render,
  Post,
  Body,
  ValidationPipe,
  UseInterceptors,
  FileInterceptor,
  UploadedFile,
  Req,
  UseGuards,
  Request,
  UseFilters,
  ForbiddenException,
} from '@nestjs/common';
import { LayoutService } from './layout.service';
import { moveCursor } from 'readline';
import { LayoutDto } from './layout.dto';
import { resolve } from 'path';
import { createFile } from '../../utils/file.util';
import { RolesGuard } from '../common/roles.guard';
import { Roles } from '../common/roles.decorators';
import { LoggingInterceptor } from '../common/logging.interceptor';
import { TransformInterceptor } from '../common/transform.interceptor';
import { ErrorsInterceptor } from '../common/exception.interceptor';
import { TimeoutInterceptor } from '../common/timeout.interceptor';
import { HttpExceptionFilter } from '../common/http-exception.filter';

@Controller('layout')
@UseGuards(RolesGuard)
@UseInterceptors(LoggingInterceptor,TransformInterceptor,ErrorsInterceptor,TimeoutInterceptor)
export class LayoutController {
  constructor(private readonly layoutService: LayoutService) {}
  @Get('carousel')
  carousel() {
    return {
      statusCode: '0000',
      message: 'OK ',
      error: null,
      data: {
        carousel: this.layoutService.getCarouselPath(),
      },
    };
  }
  @Get('all')
  @Roles('admin')
  // @ApiImplicitQuery({ name: 'role', enum: ['Admin', 'Moderator', 'User'] })
  async findAll() {
    return [];
  }
  @Get('mvc')
  @Render('index')
  moveCursor() {
    return { message: 'Hello world!' };
  }
  @Post('add')
  add(
    @Body(new ValidationPipe())
    body: LayoutDto,
  ) {
    return this.layoutService.add(body);
  }
  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  uploadFile(@UploadedFile() file, @Body('path') path) {
    return createFile(
      resolve('public', 'img', file.originalname),
      file.buffer,
    ).then(res => {
      return 'success';
    });
  }
  @Get('res')
  async getRes(@Request() request){
    await this.sleep(6000)
    return {}
  }
  sleep(time){
    return new Promise(resolve=>{
      setTimeout(()=>{
        resolve()
      },time)
    })
  }
  @Get('filter')
  @UseFilters(new HttpExceptionFilter())
  async create() {
    throw new ForbiddenException();
  }
}
