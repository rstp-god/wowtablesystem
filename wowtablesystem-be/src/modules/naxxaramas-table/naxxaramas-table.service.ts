import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { QueryForSearch } from 'src/dto/Query.dto';
import { Repository } from 'typeorm';
import { NaxxramasTable } from 'src/entities/NaxxramasTable.entity'

@Injectable()
export class NaxxramasTableService {

    constructor(
        @InjectRepository(NaxxramasTable)
        private readonly infoRepo: Repository<NaxxramasTable>
    ) {}

    async findAll(): Promise<NaxxramasTable[]> {
        return await this.infoRepo.find(); 
    }

    async findByNickname(params): Promise<NaxxramasTable[]>{
        return await this.infoRepo.find({nicknameOfRL : params.nicknameOfRL});
    }

    async findAllByQuery(params: QueryForSearch) : Promise<NaxxramasTable[]> {
        return await this.infoRepo.find({encryptedUrl: params.url , nicknameOfRL: params.RLnickname})
    }

    async create(NaxxaramasTable: NaxxramasTable): Promise<NaxxramasTable> {
        delete NaxxaramasTable.id; 
        return await this.infoRepo.save(NaxxaramasTable); 
    }

    async delete(id: number): Promise<void> { 
        await this.infoRepo.delete(id);
    }
}
