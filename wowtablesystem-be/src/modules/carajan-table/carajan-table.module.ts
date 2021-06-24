import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CarajanTable } from 'src/entities/CarajanTable.entity';
import { CarajanTableService } from './carajan-table.service';
import { CarajanTableController } from './carajan-table.controller';

@Module({  
    imports: [TypeOrmModule.forFeature([CarajanTable])],
    providers: [CarajanTableService],
    controllers: [CarajanTableController]
})
export class CarajanTableModule {}
