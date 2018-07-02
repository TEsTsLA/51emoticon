import { Injectable } from '@nestjs/common';
import { readdirSync } from 'fs';
import { resolve } from 'path';
@Injectable()
export class LayoutService {
  static LAYOUT_PATH = resolve('public', 'img', 'layout', 'carousel');
  static CAROUSEL_PATH = resolve('public', 'img', 'layout', 'carousel');
  getCarouselPath() {
    return readdirSync(LayoutService.CAROUSEL_PATH).map(imgPath => {
      return '/img/layout/carousel/' + imgPath;
    });
  }
}
