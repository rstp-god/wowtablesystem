import { Module } from '@nestjs/common';
import { MagterionTableService } from './magterion-table.service';
import { MagterionTableController } from './magterion-table.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MagterionTable } from 'src/entities/MagterionTable.entity';

@Module({
  imports:[TypeOrmModule.forFeature([MagterionTable])],
  providers: [MagterionTableService],
  controllers: [MagterionTableController]
})
export class MagterionTableModule {}
