import { Test, TestingModule } from '@nestjs/testing';
import { NaxxaramasController } from './naxxaramas.controller';

describe('NaxxaramasController', () => {
  let controller: NaxxaramasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NaxxaramasController],
    }).compile();

    controller = module.get<NaxxaramasController>(NaxxaramasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
