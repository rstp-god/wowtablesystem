import { Test, TestingModule } from '@nestjs/testing';
import { GrullairTableService } from './grullair-table.service';

describe('GrullairTableService', () => {
  let service: GrullairTableService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GrullairTableService],
    }).compile();

    service = module.get<GrullairTableService>(GrullairTableService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
