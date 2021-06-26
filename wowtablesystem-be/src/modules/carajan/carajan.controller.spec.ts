import { Test, TestingModule } from '@nestjs/testing';
import { CarajanController } from './carajan.controller';

describe('CarajanController', () => {
  let controller: CarajanController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CarajanController],
    }).compile();

    controller = module.get<CarajanController>(CarajanController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
