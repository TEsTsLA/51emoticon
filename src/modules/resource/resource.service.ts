import { Injectable, Logger } from '@nestjs/common';
import { resolve } from 'path';
import { readdirSync } from 'fs';
import { ResourceDto } from './dto/resource.dto';
import { Resource } from './entity/resource.entity';
import { plainToClass } from 'class-transformer';

@Injectable()
export class ResourceService {
  constructor(){

  }
  static EXPRESSION_PATH = resolve('public', 'img', 'resource', 'expression');
  getExpressionPath() {
    return readdirSync(ResourceService.EXPRESSION_PATH).map(imgPath => {
      return '/img/resource/expression/' + imgPath;
    });
  }
  async save(resource:ResourceDto){
    let _save;
    _save = plainToClass(Resource, resource);
    // Logger.log('sss','22')
    Logger.error('error')
    Logger.warn('is')
    return Resource.save(_save);
  }
}
