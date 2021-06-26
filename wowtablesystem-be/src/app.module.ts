import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm'
import { CarajanModule } from './modules/carajan/carajan.module';
import { CarajanTableModule } from './modules/carajan-table/carajan-table.module';


@Module({
  imports: [
    TypeOrmModule.forRoot(), 
    CarajanModule,
    CarajanTableModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
