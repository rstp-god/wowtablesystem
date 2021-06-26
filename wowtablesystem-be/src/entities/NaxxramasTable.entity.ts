import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()

export class NaxxramasTable { 

    @PrimaryGeneratedColumn()
    id: number; 

    @Column() 
    encryptedUrl: string; 

    @Column() 
    nicknameOfRL: string; 

    @Column()
    nickName: string; 

    @Column()
    class: string; 

    @Column()
    role: string; 

    @Column({type: 'text'}) 
    moreInfo: string[]; 
}