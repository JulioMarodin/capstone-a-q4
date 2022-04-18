import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
} from 'typeorm';

import { Users } from './Users';

@Entity('posts_types')
export class PostsTypes {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false, unique: true })
  type: string;

  @Column({ default: false })
  visible: boolean;

  @ManyToOne((type) => Users, (user) => user.id)
  user_id: Users;
}
