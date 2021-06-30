import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GruullairTable } from 'src/entities/GruullairTable.entity';
import { GruullairTableController } from './grullair-table.controller'; 
import { GruullairTableService } from './grullair-table.service'

@Module({  
    imports: [TypeOrmModule.forFeature([GruullairTable])],
    providers: [GruullairTableService],
    controllers: [GruullairTableController]
})
export class GrullairTableModule {}
