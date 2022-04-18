import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";

import { Books } from "./Books";

import { PostsTypes } from "./PostsTypes";

import { UserBookPosts } from './UserBookPosts';

import { Users } from './Users';

@Entity("posts")
export class Posts {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: false })
  visible: boolean;

  @CreateDateColumn()
  create_date: Date;

  @UpdateDateColumn()
  update_date: Date;

  @Column()
  description: string;

  @Column()
  image: string;

  @Column({ default: 0 })
  total_like: number;

  @Column({ default: 0 })
  total_dislike: number;

  @ManyToOne((type) => Users, (user) => user.id)
  user_id: Users;

  @ManyToOne(() => Books, (book) => book.posts)
  book: Books;

  @ManyToOne((type) => PostsTypes, (post) => post.id)
  type_id: PostsTypes;
}
