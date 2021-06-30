import { Module } from '@nestjs/common';
import { NaxxaramasController } from './naxxaramas.controller';
import { NaxxaramasService } from './naxxaramas.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Naxxramas } from 'src/entities/Naxxramas.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Naxxramas])],
  controllers: [NaxxaramasController],
  providers: [NaxxaramasService]
})
export class NaxxaramasModule {}
