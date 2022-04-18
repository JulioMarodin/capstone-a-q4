import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
} from "typeorm";

import { UserBookPosts } from './UserBookPosts';

@Entity("books")
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

  @OneToMany(() => UserBookPosts, (userBookPosts) => userBookPosts.book_id)
  book_id: UserBookPosts[];
}
