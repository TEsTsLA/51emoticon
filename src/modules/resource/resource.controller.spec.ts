import { Test, TestingModule } from '@nestjs/testing';
import { ResourceController } from './resource.controller';
import { ResourceService } from './resource.service';
import { resourceProviders, fatherProvider } from './resource.providers';

describe('Resource Controller', () => {
  let module: TestingModule;
  beforeAll(async () => {
    module = await Test.createTestingModule({
      controllers: [ResourceController],
      providers: [ResourceService,...resourceProviders,...fatherProvider],
    }).compile();
  });
  it('should be defined', () => {
    const controller: ResourceController = module.get<ResourceController>(
      ResourceController,
    );
    expect(controller).toBeDefined();
  });
});
