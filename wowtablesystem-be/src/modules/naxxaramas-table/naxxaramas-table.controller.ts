import { Controller, Get, Param, Query, Post, HttpException, Body, HttpStatus, Delete } from '@nestjs/common';
import { NaxxramasTableService } from './naxxaramas-table.service'; 
import { NaxxramasTable } from 'src/entities/NaxxramasTable.entity';
import NewTableInstance from 'src/dto/NewTableInstance.dto';
import { QueryForSearch } from 'src/dto/Query.dto';

@Controller('naxxaramas-table')
export class NaxxramasTableController {

    constructor(private readonly Service: NaxxramasTableService) {}

    @Get()
    getAll(): Promise<NaxxramasTable[]> {
        return this.Service.findAll(); 
    }

    @Get('/query')
    getAllByQuery(@Query() params: QueryForSearch): Promise<NaxxramasTable[]> {
        return this.Service.findAllByQuery(params); 
    }

    @Get(':nicknameOfRL') 
    getAllByNickName(@Param() params): Promise<NaxxramasTable[]> {
        return this.Service.findByNickname(params);
    }

    @Post() 
    addNewInst(@Body() NewTableInstance: NewTableInstance) :HttpException {
        const newInst = new NaxxramasTable(); 
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
