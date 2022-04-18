import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { PostsTypes } from "./PostsTypes";

@Entity("posts")
export class Posts {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne((type) => PostsTypes, (type_id) => type_id.id)
  type_id: PostsTypes;

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
}
