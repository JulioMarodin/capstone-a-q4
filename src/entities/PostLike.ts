import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
} from 'typeorm';
import { Posts } from './Posts';

@Entity()
export class PostLike {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: false })
  like: boolean;

  @Column({ default: false })
  deslike: boolean;

  @ManyToOne(() => Posts, (post) => post.id)
  post: Posts;
}
