import {
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { Users } from './Users';

@Entity()
export class UserBooks {
@PrimaryGeneratedColumn()
id: number;

@Column({ default: false })
read: boolean;

@Column({ default: false })
reading: boolean;

@Column({ default: false })
want_to_read: boolean;

@Column({ default: false })
favorites: boolean;

@Column()
rating: number;

@ManyToOne((type) => Users, (user) => user.id)
user_id: Users;
}
