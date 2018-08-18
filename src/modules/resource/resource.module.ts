import { Module } from '@nestjs/common';
import { ResourceController } from './resource.controller';
import { ResourceService } from './resource.service';
import { resourceProviders, fatherProvider } from './resource.providers';

@Module({
  controllers: [ResourceController],
  providers: [ResourceService,...resourceProviders,...fatherProvider],
})
export class ResourceModule {}
