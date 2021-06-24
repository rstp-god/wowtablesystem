import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CarajanTable } from 'src/entities/CarajanTable.entity';
import { Repository } from 'typeorm';
import { QueryForSearch } from 'src/dto/Query.dto';

@Injectable()
export class CarajanTableService {

    constructor(
        @InjectRepository(CarajanTable)
        private readonly infoRepo: Repository<CarajanTable>
    ) {}

    async findAll(): Promise<CarajanTable[]> {
        return await this.infoRepo.find(); 
    }

    async findByNickname(params): Promise<CarajanTable[]>{
        return await this.infoRepo.find({nicknameOfRL : params.nicknameOfRL});
    }

    async findAllByQuery(params: QueryForSearch) : Promise<CarajanTable[]> {
        return await this.infoRepo.find({encryptedUrl: params.url , nicknameOfRL: params.RLnickname})
    }

    async create(CarajanTable: CarajanTable): Promise<CarajanTable> {
        delete CarajanTable.id; 
        return await this.infoRepo.save(CarajanTable); 
    }

    async delete(id: number): Promise<void> { 
        await this.infoRepo.delete(id);
    }
}
