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
import { Carajan } from './entities/Carajan.entity';
import { CarajanTable } from './entities/CarajanTable.entity';
import { Gruullair } from './entities/Gruullair.entity';
import { GruullairTable } from './entities/GruullairTable.entity';
import { Magterion } from './entities/Magterion.entity';
import { MagterionTable } from './entities/MagterionTable.entity';
import { Naxxramas } from './entities/Naxxramas.entity';
import { NaxxramasTable } from './entities/NaxxramasTable.entity';


@Module({
  imports: [
    TypeOrmModule.forRoot(
      {    
        type: "mysql",
        host: "localhost",
        port: 3306,
        username: "a0540172_prod",
        password: "CG2gBUYI",
        database: "a0540172_wowtables",
        entities: [Carajan,CarajanTable,Gruullair,GruullairTable,Magterion,MagterionTable,Naxxramas,NaxxramasTable],
        synchronize: true
    }
    ), 
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
