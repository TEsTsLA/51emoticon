import { Test, TestingModule } from '@nestjs/testing';
import { LayoutService } from './layout.service';
import { LayoutController } from './layout.controller';
import { TypeOrmModule, getRepositoryToken } from '@nestjs/typeorm';
import { Layout } from './layout.entity';

describe('LayoutService', () => {
  let service: LayoutService;
  const mockRepository = {
    data: [
      { id: 1, name: 'test1@email.com'},
      { id: 2, name: 'valid@email.com'},
    ],
  };
  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports:[TypeOrmModule.forFeature([Layout])],
      controllers: [LayoutController],
      providers: [LayoutService,{
        provide:'LayoutRepository',
        useFactory:()=>({})
      }],
    }).compile();
    service = module.get<LayoutService>(LayoutService);
  });
  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
