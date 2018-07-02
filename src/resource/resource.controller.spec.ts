import { Test, TestingModule } from '@nestjs/testing';
import { ResourceController } from './resource.controller';

describe('Resource Controller', () => {
  let module: TestingModule;
  beforeAll(async () => {
    module = await Test.createTestingModule({
      controllers: [ResourceController],
    }).compile();
  });
  it('should be defined', () => {
    const controller: ResourceController = module.get<ResourceController>(
      ResourceController,
    );
    expect(controller).toBeDefined();
  });
});
