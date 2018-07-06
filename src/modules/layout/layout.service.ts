import { Injectable } from '@nestjs/common';
import { readdirSync } from 'fs';
import { resolve } from 'path';
import { Layout } from './layout.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { LayoutDto } from './layout.dto';
import { plainToClass } from 'class-transformer';
@Injectable()
export class LayoutService {
  constructor(
    @InjectRepository(Layout)
    private readonly LayoutRepository: Repository<Layout>,
  ) {}
  static LAYOUT_PATH = resolve('public', 'img', 'layout', 'carousel');
  static CAROUSEL_PATH = resolve('public', 'img', 'layout', 'carousel');
  getCarouselPath() {
    return readdirSync(LayoutService.CAROUSEL_PATH).map(imgPath => {
      return '/img/layout/carousel/' + imgPath;
    });
  }
  async findAll(): Promise<Layout[]> {
    return await this.LayoutRepository.find();
  }

  async add(layout: LayoutDto) {
    let _save;
    _save = plainToClass(Layout, layout);
    // let _save = new Layout();
    // _save.name = `name_${Math.floor(Math.random()*100)}`

    return await this.LayoutRepository.save(_save);
  }
  async upload(file: File) {
    console.log(file);
  }
}
