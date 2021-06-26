import { Module } from '@nestjs/common';
import { CarajanService } from './carajan.service';
import { CarajanController } from './carajan.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Carajan } from 'src/entities/Carajan.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Carajan])],
  providers: [CarajanService],
  controllers: [CarajanController]
})
export class CarajanModule {}
