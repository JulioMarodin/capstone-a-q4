import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity('publishers')
export class Publishers {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: false, unique: true, length: 128 })
    name: string;
}
