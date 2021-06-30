import { Test, TestingModule } from '@nestjs/testing';
import { GrullairTableController } from './grullair-table.controller';

describe('GrullairTableController', () => {
  let controller: GrullairTableController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GrullairTableController],
    }).compile();

    controller = module.get<GrullairTableController>(GrullairTableController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
