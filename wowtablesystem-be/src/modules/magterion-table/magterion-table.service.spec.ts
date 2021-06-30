import { Test, TestingModule } from '@nestjs/testing';
import { MagterionTableService } from './magterion-table.service';

describe('MagterionTableService', () => {
  let service: MagterionTableService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MagterionTableService],
    }).compile();

    service = module.get<MagterionTableService>(MagterionTableService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
