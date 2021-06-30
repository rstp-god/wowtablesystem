import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { QueryForSearch } from 'src/dto/Query.dto';
import { Repository } from 'typeorm';
import { GruullairTable } from 'src/entities/GruullairTable.entity';

@Injectable()
export class GruullairTableService {

    constructor(
        @InjectRepository(GruullairTable)
        private readonly infoRepo: Repository<GruullairTable>
    ) {}

    async findAll(): Promise<GruullairTable[]> {
        return await this.infoRepo.find(); 
    }

    async findByNickname(params): Promise<GruullairTable[]>{
        return await this.infoRepo.find({nicknameOfRL : params.nicknameOfRL});
    }

    async findAllByQuery(params: QueryForSearch) : Promise<GruullairTable[]> {
        return await this.infoRepo.find({encryptedUrl: params.url , nicknameOfRL: params.RLnickname})
    }

    async create(GruullairTable: GruullairTable): Promise<GruullairTable> {
        delete GruullairTable.id; 
        return await this.infoRepo.save(GruullairTable); 
    }

    async delete(id: number): Promise<void> { 
        await this.infoRepo.delete(id);
    }
}
