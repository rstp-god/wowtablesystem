import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";


@Entity()

export class Magterion { 

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'date' }) 
    dueDate: Date; 

    @Column({ type: 'date' }) 
    creationDate: Date; 

    @Column() 
    creatorNickName: string; 

    @Column() 
    encryptedUrlToTable: string; 
}