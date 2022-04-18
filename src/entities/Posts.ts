import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
} from "typeorm";

import { UserBookPosts } from './UserBookPosts';

@Entity("posts")
export class Posts {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: false })
  visible: boolean;

  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  create_date: Date;

  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
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
}
