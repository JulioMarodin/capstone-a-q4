import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";
import { PostsTypes } from "./PostsTypes";

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

  @ManyToOne((type) => PostsTypes, (post) => post.id)
  type_id: PostsTypes;
}
