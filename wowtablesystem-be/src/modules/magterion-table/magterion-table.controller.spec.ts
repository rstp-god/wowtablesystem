import { Test, TestingModule } from '@nestjs/testing';
import { MagterionTableController } from './magterion-table.controller';

describe('MagterionTableController', () => {
  let controller: MagterionTableController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MagterionTableController],
    }).compile();

    controller = module.get<MagterionTableController>(MagterionTableController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
