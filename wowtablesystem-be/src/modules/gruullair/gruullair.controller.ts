import { Controller, HttpException, HttpStatus } from '@nestjs/common';
import { GruullairService } from './gruullair.service';
import { Gruullair } from 'src/entities/Gruullair.entity';
import { Get } from '@nestjs/common';
import { Param } from '@nestjs/common';
import { Post } from '@nestjs/common';
import { Body } from '@nestjs/common';
import CreateNewInstace from 'src/dto/NewInstance.dto';
import { Delete } from '@nestjs/common';

@Controller('gruullair')
export class GruullairController {

    constructor(private readonly Service: GruullairService) {}

    @Get()
    getAll(): Promise<Gruullair[]> {
        return this.Service.findAll(); 
    }

    @Get(':nickname')
    getAllByNickName(@Param() params): Promise<Gruullair[]> {
        return this.Service.findByNickName(params);
    }

    @Post()
    addNewInst(@Body() CreateNewInstace: CreateNewInstace): HttpException {
        const newInst = new Gruullair(); 
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
