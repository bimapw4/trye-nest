import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class UserEntity {
    @PrimaryGeneratedColumn()
    nik: number

    @Column()
    name: string

    @Column()
    ttl: Date
    
}
