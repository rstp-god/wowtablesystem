import { Test, TestingModule } from '@nestjs/testing';
import { GruullairService } from './gruullair.service';

describe('GruullairService', () => {
  let service: GruullairService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GruullairService],
    }).compile();

    service = module.get<GruullairService>(GruullairService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
