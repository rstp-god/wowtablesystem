import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";


@Entity()

export class Carajan { 

    @PrimaryGeneratedColumn()
    id: number;

    @Column() 
    dueDate: string; 

    @Column() 
    creationDate: string; 

    @Column() 
    creatorNickName: string; 

    @Column() 
    encryptedUrlToTable: string; 
}