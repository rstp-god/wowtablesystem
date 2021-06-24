import { Controller, Get } from '@nestjs/common';
import { Connection } from 'typeorm'

@Controller()
export class AppController {
  constructor(private con: Connection) {}

  @Get()
  getHello(): any {
    return this.con.isConnected; 
  }
}
