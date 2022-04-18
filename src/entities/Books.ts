import {
  Entity,
  PrimaryGeneratedColumn,
  Column, ManyToMany,
  JoinTable,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { Genres } from "./Genres";
import { PostLike } from "./PostLike";
import { Publishers } from "./Publishers";
import { Posts } from "./Posts";
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

  @OneToMany(() => PostLike, (postlike) => postlike.book)
  postsAv: any;

  @ManyToOne(() => Publishers, (publisher) => publisher.books)
  publisher: Publishers;

  @ManyToMany(() => Genres)
  @JoinTable()
  genre: Genres;
}
