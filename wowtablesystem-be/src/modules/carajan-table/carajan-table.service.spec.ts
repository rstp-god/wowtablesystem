import { Test, TestingModule } from '@nestjs/testing';
import { CarajanTableService } from './carajan-table.service';

describe('CarajanTableService', () => {
  let service: CarajanTableService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CarajanTableService],
    }).compile();

    service = module.get<CarajanTableService>(CarajanTableService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
