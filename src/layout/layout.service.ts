import { Injectable } from '@nestjs/common';
import { readdirSync } from 'fs';
import { resolve } from 'path';
import { Layout } from './layout.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
@Injectable()
export class LayoutService {
  constructor(
    @InjectRepository(Layout)
    private readonly LayoutRepository: Repository<Layout>,
  ){

  }
  static LAYOUT_PATH = resolve('public', 'img', 'layout', 'carousel');
  static CAROUSEL_PATH = resolve('public', 'img', 'layout', 'carousel');
  getCarouselPath() {
    return readdirSync(LayoutService.CAROUSEL_PATH).map(imgPath => {
      return '/img/layout/carousel/' + imgPath;
    });
  }
  async findAll():Promise<Layout[]>{
    return await this.LayoutRepository.find();
  }
}
