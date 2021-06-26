import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Carajan } from 'src/entities/Carajan.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CarajanService {

    constructor( 
        @InjectRepository(Carajan)
        private readonly infoRepo: Repository<Carajan>
    ) {}

    async findAll(): Promise<Carajan[]> {
        return await this.infoRepo.find(); 
    }

    async findByNickname(params): Promise<Carajan[]> {
        return await this.infoRepo.find({creatorNickName: params.nickname}); 
    }

    async create(Carajan: Carajan): Promise<Carajan> { 
        delete Carajan.id; 
        return await this.infoRepo.save(Carajan); 
    }

    async delete(id: number) { 
        await this.infoRepo.delete(id); 
    }

}
