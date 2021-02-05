import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('User')

export class User {
    @PrimaryGeneratedColumn()
    id:number;

    @Column({ 
        type: 'varchar', 
        nullable: false, 
        unique: true,
        length: 40 
    }) 
    email: string; 

    @Column({ 
        type: 'varchar', 
        nullable: false,
        length: 20 
    }) 
    password: string;
}
