import { Controller, Get, Post, Param, Body, HttpException, HttpStatus, Query, Delete } from '@nestjs/common';
import { CarajanService } from './carajan.service';
import { Carajan } from 'src/entities/Carajan.entity';
import CreateNewInstace from 'src/dto/NewInstance.dto';

@Controller('carajan')
export class CarajanController {

    constructor( private readonly Service: CarajanService) {}

    @Get()
    getAll(): Promise<Carajan[]>{
        return this.Service.findAll(); 
    }

    @Get(':nickname')
    getAllByNickName(@Param() params): Promise<Carajan[]> {
        return this.Service.findByNickname(params); 
    }

    @Post() 
    addNewInst(@Body() CreateNewInstace: CreateNewInstace) :HttpException {
        const newInst = new Carajan(); 
        const date = new Date(); 
        newInst.creationDate = date.toLocaleString().slice(0,10); 
        newInst.creatorNickName = CreateNewInstace.creatorNickName; 
        newInst.dueDate = CreateNewInstace.dueDate; 
        newInst.encryptedUrlToTable = CreateNewInstace.encryptedUrlToTable;
        console.log(newInst);
        this.Service.create(newInst); 
        return new HttpException('New instance just Created!', HttpStatus.OK)
    }

    @Delete(':id') 
    deleteInstance(@Param() id:number): HttpException {
        this.Service.delete(id); 
        return new HttpException('Instance just Deleted!', HttpStatus.OK); 
    }

}
