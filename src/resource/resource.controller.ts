import { ResourceService } from './resource.service';
import { Controller, Post, Get, Param, Query } from '@nestjs/common';
import Expression from './models/expression.class';

@Controller('resource')
export class ResourceController {
    constructor(private resourceService: ResourceService) { }
    @Get('expression/:id')
    list(@Query() query, @Param() param) {
        return {
            statusCode: '0000',
            message: 'OK ',
            error: null,
            data: this.resourceService.getExpressionPath().map(imgUrl => {
                const result = new Expression('标题1', imgUrl, Math.floor(Math.random() * 10), '');
                return result;
            }),
            query_: query,
            param_: param,
        };
    }
}
