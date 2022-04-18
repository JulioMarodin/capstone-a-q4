import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
} from "typeorm";
import { Books } from "./Books";

@Entity('publishers')
export class Publishers {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: false, unique: true, length: 128 })
    name: string;

    @ManyToOne(() => Books, (book) => book.publisher)
    books: Books;
}
