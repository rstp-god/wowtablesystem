import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm'
import { CarajanModule } from './modules/carajan/carajan.module';
import { CarajanTableModule } from './modules/carajan-table/carajan-table.module';
import { GruullairModule } from './modules/gruullair/gruullair.module';
import { GrullairTableModule } from './modules/grullair-table/grullair-table.module';
import { MagterionModule } from './modules/magterion/magterion.module';
import { MagterionTableModule } from './modules/magterion-table/magterion-table.module';
import { NaxxaramasModule } from './modules/naxxaramas/naxxaramas.module';
import { NaxxaramasTableModule } from './modules/naxxaramas-table/naxxaramas-table.module';


@Module({
  imports: [
    TypeOrmModule.forRoot(), 
    CarajanModule,
    CarajanTableModule, 
    GruullairModule, 
    GrullairTableModule, 
    MagterionModule,
    MagterionTableModule,
    NaxxaramasModule, 
    NaxxaramasTableModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
