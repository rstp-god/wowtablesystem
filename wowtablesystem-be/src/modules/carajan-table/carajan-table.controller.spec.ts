import { Test, TestingModule } from '@nestjs/testing';
import { CarajanTableController } from './carajan-table.controller';

describe('CarajanTableController', () => {
  let controller: CarajanTableController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CarajanTableController],
    }).compile();

    controller = module.get<CarajanTableController>(CarajanTableController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
