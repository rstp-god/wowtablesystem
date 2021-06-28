import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Gruullair } from 'src/entities/Gruullair.entity';
import { Repository } from 'typeorm';

@Injectable()
export class GruullairService {

    constructor( 
        @InjectRepository(Gruullair)
        private readonly infoRepo: Repository<Gruullair>
    ) {}

    async findAll(): Promise<Gruullair[]> { 
        return await this.infoRepo.find(); 
    }

    async findByNickName(params): Promise<Gruullair[]> {
        return await this.infoRepo.find({creatorNickName: params.nickname})
    }

    async create(Gruullair: Gruullair): Promise<Gruullair>{ 
        delete Gruullair.id; 
        return await this.infoRepo.save(Gruullair); 
    }

    async delete(id: number){ 
        await this.infoRepo.delete(id);
    }
}
