import { Test, TestingModule } from '@nestjs/testing';
import { LayoutService } from './layout.service';

describe('LayoutService', () => {
  let service: LayoutService;
  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LayoutService],
    }).compile();
    service = module.get<LayoutService>(LayoutService);
  });
  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
