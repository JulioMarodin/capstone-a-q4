import {
 Entity, PrimaryGeneratedColumn, Column, ManyToMany,
} from 'typeorm';
import { Books } from './Books';

@Entity('genres')
export class Genres {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false, unique: true, length: 128 })
  name: string;

  @ManyToMany(() => Books, (books) => books.genres, { eager: true })
  books:Books[];
}
