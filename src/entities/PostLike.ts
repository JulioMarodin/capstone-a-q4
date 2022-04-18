import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
} from 'typeorm';
import { Books } from './Books';

@Entity()
export class PostLike {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: false })
  like: boolean;

  @Column({ default: false })
  deslike: boolean;

  @ManyToOne(() => Books, (book) => book.postsAv)
  book: Books;
}
