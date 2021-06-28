import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";


@Entity()

export class Gruullair { 

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'date' }) 
    dueDate: string; 

    @Column({ type: 'date' }) 
    creationDate: string; 

    @Column() 
    creatorNickName: string; 

    @Column() 
    encryptedUrlToTable: string; 
}