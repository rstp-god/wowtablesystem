import { Test, TestingModule } from '@nestjs/testing';
import { NaxxaramasService } from './naxxaramas.service';

describe('NaxxaramasService', () => {
  let service: NaxxaramasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NaxxaramasService],
    }).compile();

    service = module.get<NaxxaramasService>(NaxxaramasService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
