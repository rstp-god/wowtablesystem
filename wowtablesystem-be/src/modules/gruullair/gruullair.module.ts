import { Module } from '@nestjs/common';
import { GruullairService } from './gruullair.service';
import { GruullairController } from './gruullair.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Gruullair } from 'src/entities/Gruullair.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Gruullair])],
    providers: [GruullairService],
    controllers: [GruullairController]
})
export class GruullairModule {}
