import { Test, TestingModule } from '@nestjs/testing';
import { MagterionController } from './magterion.controller';

describe('MagterionController', () => {
  let controller: MagterionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MagterionController],
    }).compile();

    controller = module.get<MagterionController>(MagterionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
