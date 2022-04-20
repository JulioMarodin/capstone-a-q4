import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
} from 'typeorm';
import { Books } from './Books';
import { Posts } from './Posts';

@Entity('authors')
export class Authors {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false, unique: true, length: 128 })
  name: string;

  @Column({ length: 128 })
  country: string;

  @Column()
  birthday: Date;

  @Column({ nullable: true })
  death_date: Date;

  @OneToMany(() => Books, (books) => books.author, { eager: true })
  books: Books[];

  @OneToMany(() => Posts, (post) => post.author_id, { eager: true })
  posts: Posts[];
}
