import { Test, TestingModule } from '@nestjs/testing';
import { LayoutController } from './layout.controller';
import { LayoutService } from './layout.service';
import { Layout } from './layout.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

describe('Layout Controller', () => {
  let module: TestingModule;
  beforeAll(async () => {
    module = await Test.createTestingModule({
      imports:[TypeOrmModule.forFeature([Layout])],
      controllers: [LayoutController],
      providers: [LayoutService,{
        
      }],
    }).compile();
  });
  it('should be defined', () => {
    const controller: LayoutController = module.get<LayoutController>(
      LayoutController,
    );
    expect(controller).toBeDefined();
  });
});
