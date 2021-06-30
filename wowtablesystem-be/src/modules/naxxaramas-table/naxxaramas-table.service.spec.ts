import { Test, TestingModule } from '@nestjs/testing';
import { NaxxaramasTableService } from './naxxaramas-table.service';

describe('NaxxaramasTableService', () => {
  let service: NaxxaramasTableService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NaxxaramasTableService],
    }).compile();

    service = module.get<NaxxaramasTableService>(NaxxaramasTableService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
