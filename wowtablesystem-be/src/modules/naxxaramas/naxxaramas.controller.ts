import { Controller, Get, Post, Delete, Body, Param, HttpException, HttpStatus } from '@nestjs/common';
import { NaxxaramasService } from './naxxaramas.service';
import { Naxxramas } from 'src/entities/Naxxramas.entity';
import CreateNewInstace from 'src/dto/NewInstance.dto';

@Controller('naxxaramas')
export class NaxxaramasController {

    constructor(private readonly Service: NaxxaramasService) {}

    @Get()
    getAll(): Promise<Naxxramas[]> {
        return this.Service.findAll(); 
    }

    @Get(':nickname')
    getAllByNickName(@Param() params): Promise<Naxxramas[]> {
        return this.Service.findByNickName(params);
    }

    @Post()
    addNewInst(@Body() CreateNewInstace: CreateNewInstace): HttpException {
        const newInst = new Naxxramas(); 
        const date = new Date(); 
        newInst.creationDate = date.toLocaleString().slice(0,10); 
        newInst.creatorNickName  =  CreateNewInstace.creatorNickName; 
        newInst.dueDate = CreateNewInstace.dueDate; 
        newInst.encryptedUrlToTable = CreateNewInstace.encryptedUrlToTable;
        this.Service.create(newInst);
        return new HttpException('New instance just Created!', HttpStatus.OK); 
    }
    
    @Delete(':id') 
    deleteInstance(@Param() id:number): HttpException {
        this.Service.delete(id); 
        return new HttpException('Instance just Deleted!', HttpStatus.OK); 
    }
}
