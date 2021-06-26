import { Controller, Get, Param, Query, Post, HttpException, Body, HttpStatus, Delete } from '@nestjs/common';
import { CarajanTableService } from './carajan-table.service';
import { CarajanTable } from 'src/entities/CarajanTable.entity';
import { QueryForSearch } from 'src/dto/Query.dto';
import NewTableInstance from 'src/dto/NewTableInstance.dto';

@Controller('carajan-table')
export class CarajanTableController {

    constructor( private readonly Service: CarajanTableService) {}

    @Get()
    getAll(): Promise<CarajanTable[]>{
        return this.Service.findAll(); 
    }

    @Get('/query')
    getAllByQuery(@Query() params: QueryForSearch): Promise<CarajanTable[]> {
        return this.Service.findAllByQuery(params); 
    }

    @Get(':nicknameOfRL') 
    getAllByNickName(@Param() params): Promise<CarajanTable[]> {
        return this.Service.findByNickname(params);
    }

    @Post() 
    addNewInst(@Body() NewTableInstance: NewTableInstance) :HttpException {
        const newInst = new CarajanTable(); 
        newInst.encryptedUrl = NewTableInstance.encryptedUrl; 
        newInst.nickName = NewTableInstance.nickName; 
        newInst.nicknameOfRL = NewTableInstance.nicknameOfRL; 
        newInst.class = NewTableInstance.class;  
        newInst.role = NewTableInstance.role; 
        newInst.moreInfo = NewTableInstance.moreInfo; 
        this.Service.create(newInst); 
        return new HttpException('New instance just Created!', HttpStatus.OK) 
    }

    @Delete(':id') 
    deleteInst(@Param() id:number): HttpException { 
        this.Service.delete(id)
        return new HttpException('New instance just Deleted!', HttpStatus.OK);
    }
}
