import { Test, TestingModule } from '@nestjs/testing';
import { LayoutController } from './layout.controller';
import { LayoutService } from './layout.service';

describe('Layout Controller', () => {
  let module: TestingModule;
  beforeAll(async () => {
    module = await Test.createTestingModule({
      controllers: [LayoutController],
      providers: [LayoutService],
    }).compile();
  });
  it('should be defined', () => {
    const controller: LayoutController = module.get<LayoutController>(
      LayoutController,
    );
    expect(controller).toBeDefined();
  });
});
