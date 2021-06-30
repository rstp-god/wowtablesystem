import { Controller, Get, Param, Query, Post, HttpException, Body, HttpStatus, Delete } from '@nestjs/common';
import { MagterionService } from './magterion.service';
import { Magterion } from 'src/entities/Magterion.entity';
import CreateNewInstace from 'src/dto/NewInstance.dto';

@Controller('magterion')
export class MagterionController {

    constructor( private readonly Service: MagterionService) {}

    @Get()
    getAll(): Promise<Magterion[]>{
        return this.Service.findAll(); 
    }

    @Get(':nickname')
    getAllByNickName(@Param() params): Promise<Magterion[]> {
        return this.Service.findByNickname(params); 
    }

    @Post() 
    addNewInst(@Body() CreateNewInstace: CreateNewInstace) :HttpException {
        const newInst = new Magterion(); 
        const date = new Date(); 
        newInst.creationDate = date.toLocaleString().slice(0,10); 
        newInst.creatorNickName = CreateNewInstace.creatorNickName; 
        newInst.dueDate = CreateNewInstace.dueDate; 
        newInst.encryptedUrlToTable = CreateNewInstace.encryptedUrlToTable;
        this.Service.create(newInst); 
        return new HttpException('New instance just Created!', HttpStatus.OK)
    }

    @Delete(':id') 
    deleteInstance(@Param() id:number): HttpException {
        this.Service.delete(id); 
        return new HttpException('Instance just Deleted!', HttpStatus.OK); 
    }

}
