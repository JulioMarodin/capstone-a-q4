import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Users {
    @PrimaryGeneratedColumn('uuid')
    id?: string;

    @Column({ length: 128 })
    name: string;

    @Column({ length: 128 })
    email: string;

    @Column()
    password: string;

    @Column()
    biography: string;

    @Column()
    birthday: Date;

    @Column({ length: 128 })
    city: string;
}
