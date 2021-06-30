import { Test, TestingModule } from '@nestjs/testing';
import { MagterionService } from './magterion.service';

describe('MagterionService', () => {
  let service: MagterionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MagterionService],
    }).compile();

    service = module.get<MagterionService>(MagterionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
