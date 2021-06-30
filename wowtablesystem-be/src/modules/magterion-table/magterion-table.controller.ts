import { Controller, Get, Param, Query, Post, HttpException, Body, HttpStatus, Delete } from '@nestjs/common';
import { MagterionTableService } from './magterion-table.service';
import { MagterionTable } from 'src/entities/MagterionTable.entity';
import NewTableInstance from 'src/dto/NewTableInstance.dto';
import { QueryForSearch } from 'src/dto/Query.dto';
@Controller('magterion-table')
export class MagterionTableController {

    constructor(private readonly Service: MagterionTableService) {}

    @Get()
    getAll(): Promise<MagterionTable[]> {
        return this.Service.findAll(); 
    }

    @Get('/query')
    getAllByQuery(@Query() params: QueryForSearch): Promise<MagterionTable[]> {
        return this.Service.findAllByQuery(params); 
    }

    @Get(':nicknameOfRL') 
    getAllByNickName(@Param() params): Promise<MagterionTable[]> {
        return this.Service.findByNickname(params);
    }

    @Post() 
    addNewInst(@Body() NewTableInstance: NewTableInstance) :HttpException {
        const newInst = new MagterionTable(); 
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
