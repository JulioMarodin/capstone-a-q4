import {
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Books } from './Books';

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

@ManyToOne(() => Users, (user) => user.userBooks, { eager: true })
user_id: Users;

@ManyToOne(() => Books, (book) => book.userBook, { eager: true })
book_id: Books;
}
