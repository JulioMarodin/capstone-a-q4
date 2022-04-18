import { Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

import { Users } from './Users';
import { Books } from './Books';
import { Posts } from './Posts';

@Entity()
export class UserBookPosts {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne((type) => Users, (user) => user.id)
  user_id: Users;

  @ManyToOne((type) => Books, (book) => book.id)
  book_id: Books;

  @ManyToOne((type) => Posts, (post) => post.id)
  post_id: Posts;
}
