import { Test, TestingModule } from '@nestjs/testing';
import { LayoutController } from './layout.controller';

describe('Layout Controller', () => {
  let module: TestingModule;
  beforeAll(async () => {
    module = await Test.createTestingModule({
      controllers: [LayoutController],
    }).compile();
  });
  it('should be defined', () => {
    const controller: LayoutController = module.get<LayoutController>(
      LayoutController,
    );
    expect(controller).toBeDefined();
  });
});
