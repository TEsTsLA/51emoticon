import { Injectable } from '@nestjs/common';
import { resolve } from 'path';
import { readdirSync } from 'fs';

@Injectable()
export class ResourceService {
  static EXPRESSION_PATH = resolve('public', 'img', 'resource', 'expression');
  getExpressionPath() {
    return readdirSync(ResourceService.EXPRESSION_PATH).map(imgPath => {
      return '/img/resource/expression/' + imgPath;
    });
  }
}
