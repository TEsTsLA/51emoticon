import { Controller, Get, Render, Post, Body, ValidationPipe, UseInterceptors, FileInterceptor, UploadedFile } from '@nestjs/common';
import { LayoutService } from './layout.service';
import { moveCursor } from 'readline';
import { LayoutDto } from './layout.dto';

@Controller('layout')
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
  // @ApiImplicitQuery({ name: 'role', enum: ['Admin', 'Moderator', 'User'] })
  findAll(){
    return this.layoutService.findAll()
  }
  @Get('mvc')
  @Render('index')
  moveCursor(){
    return { message: 'Hello world!' };

  }
  @Post('add')
  add(@Body(new ValidationPipe()) body:LayoutDto){
    return this.layoutService.add(body)
  }
  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  uploadFile(@UploadedFile() file) {
    console.log(file);
  }
}