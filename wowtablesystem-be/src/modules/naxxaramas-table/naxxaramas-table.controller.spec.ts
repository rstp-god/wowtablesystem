import { Test, TestingModule } from '@nestjs/testing';
import { NaxxaramasTableController } from './naxxaramas-table.controller';

describe('NaxxaramasTableController', () => {
  let controller: NaxxaramasTableController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NaxxaramasTableController],
    }).compile();

    controller = module.get<NaxxaramasTableController>(NaxxaramasTableController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
