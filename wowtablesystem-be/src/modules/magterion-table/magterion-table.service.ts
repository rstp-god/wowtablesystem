import { Injectable } from '@nestjs/common';
import { MagterionTable } from 'src/entities/MagterionTable.entity';
import { QueryForSearch } from 'src/dto/Query.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class MagterionTableService {

    constructor(
        @InjectRepository(MagterionTable)
        private readonly infoRepo: Repository<MagterionTable>
    ) {}

    async findAll(): Promise<MagterionTable[]> {
        return await this.infoRepo.find(); 
    }

    async findByNickname(params): Promise<MagterionTable[]>{
        return await this.infoRepo.find({nicknameOfRL : params.nicknameOfRL});
    }

    async findAllByQuery(params: QueryForSearch) : Promise<MagterionTable[]> {
        return await this.infoRepo.find({encryptedUrl: params.url , nicknameOfRL: params.RLnickname})
    }

    async create(MagterionTable: MagterionTable): Promise<MagterionTable> {
        delete MagterionTable.id; 
        return await this.infoRepo.save(MagterionTable); 
    }

    async delete(id: number): Promise<void> { 
        await this.infoRepo.delete(id);
    }
}
