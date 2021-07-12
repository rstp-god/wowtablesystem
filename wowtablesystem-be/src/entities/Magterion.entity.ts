import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";


@Entity()

export class Magterion { 

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