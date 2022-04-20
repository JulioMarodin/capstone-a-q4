import {
  Entity,
  PrimaryGeneratedColumn,
  Column, ManyToMany,
  JoinTable,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Genres } from './Genres';
import { Publishers } from './Publishers';
import { Posts } from './Posts';
import { Authors } from './Authors';
import { UserBooks } from './UserBooks';

@Entity('books')
export class Books {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: 0 })
  rating: number;

  @Column({ default: 0 })
  number_reviews: number;

  @Column({ length: 13 })
  isbn: string;

  @Column({ length: 128, nullable: false })
  title: string;

  @Column()
  volume: number;

  @Column()
  cover_image: string;

  @Column()
  released_date: Date;

  @Column()
  number_pages: number;

  @OneToMany(() => Posts, (post) => post.book)
  posts: Posts[];

  @OneToMany(() => UserBooks, (userBooks) => userBooks.book_id)
  userBook: UserBooks[];

  @ManyToOne(() => Publishers, (publisher) => publisher.books)
  publisher: Publishers;

  @ManyToOne(() => Authors, (author) => author.books)
  author: Promise<Authors>;

  @ManyToMany(() => Genres)
  @JoinTable()
  genre: Genres;
}
