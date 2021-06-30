import { Module } from '@nestjs/common';
import { NaxxramasTableService } from './naxxaramas-table.service';
import { NaxxramasTableController } from './naxxaramas-table.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NaxxramasTable } from 'src/entities/NaxxramasTable.entity';

@Module({
  imports: [TypeOrmModule.forFeature([NaxxramasTable])],
  providers: [NaxxramasTableService],
  controllers: [NaxxramasTableController]
})
export class NaxxaramasTableModule {}
