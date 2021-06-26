import { Test, TestingModule } from '@nestjs/testing';
import { CarajanService } from './carajan.service';

describe('CarajanService', () => {
  let service: CarajanService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CarajanService],
    }).compile();

    service = module.get<CarajanService>(CarajanService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
