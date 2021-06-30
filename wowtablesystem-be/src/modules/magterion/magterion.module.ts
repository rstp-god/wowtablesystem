import { Module } from '@nestjs/common';
import { MagterionController } from './magterion.controller';
import { MagterionService } from './magterion.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Magterion } from 'src/entities/Magterion.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Magterion])],
  controllers: [MagterionController],
  providers: [MagterionService]
})
export class MagterionModule {}
