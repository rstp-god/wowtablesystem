import { Test, TestingModule } from '@nestjs/testing';
import { GruullairController } from './gruullair.controller';

describe('GruullairController', () => {
  let controller: GruullairController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GruullairController],
    }).compile();

    controller = module.get<GruullairController>(GruullairController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
