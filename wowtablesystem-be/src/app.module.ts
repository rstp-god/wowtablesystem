import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm'
import { CarajanModule } from './modules/carajan/carajan.module';
import { CarajanTableModule } from './modules/carajan-table/carajan-table.module';
import { GruullairModule } from './modules/gruullair/gruullair.module';


@Module({
  imports: [
    TypeOrmModule.forRoot({
        type: "mysql",
        host: "sundancex.ru",
        port: 3306,
        username: "a0540172_wowtables",
        password: "im5G3xtU",
        database: "a0540172_wowtables",
        entities: ["dist/**/*.entity{.ts,.js}"],
        synchronize: true
    }), 
    CarajanModule,
    CarajanTableModule, 
    GruullairModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
