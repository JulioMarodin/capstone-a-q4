import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";
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

  @OneToMany(() => UserBookPosts, (userBookPosts) => userBookPosts.post_id)
  book_id: UserBookPosts[];

  @ManyToOne((type) => Users, (user) => user.id)
  user_id: Users;

  @ManyToOne((type) => PostsTypes, (post) => post.id)
  type_id: PostsTypes;
}
