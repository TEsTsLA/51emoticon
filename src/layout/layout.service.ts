import { Injectable } from '@nestjs/common';
import { readdirSync } from 'fs';
import { resolve } from 'path';
@Injectable()
export class LayoutService {
  static LAYOUT_PATH = resolve('public', 'img', 'layout', 'carousel');
  static carouselPath = resolve('public', 'img', 'layout', 'carousel');
  getCarouselPath() {
    return readdirSync(LayoutService.carouselPath).map(imgPath => {
      return '/img/layout/carousel/' + imgPath;
    });
  }
}
