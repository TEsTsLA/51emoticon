import { Controller, Get } from '@nestjs/common';
import { LayoutService } from './layout.service';

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
  findAll(){
    return this.layoutService.findAll()
  }
}
