import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    OneToMany,
} from 'typeorm';

import { TratativaAdmin } from './TratativaAdmin';
import { Books } from './Books';
import { UserBooks } from './UserBooks';
import { Posts } from './Posts';

@Entity('users')
export class Users {
  @PrimaryGeneratedColumn('uuid')
    id: string;

  @Column({ length: 128 })
    name: string;

  @Column({ length: 128, unique: true })
    email: string;

  @Column()
    password: string;

  @Column()
    biography: string;

  @Column()
    birthday: Date;

  @Column({ length: 128 })
  city: string;

  @Column({ default: false })
  admin: boolean;

  @OneToMany(() => TratativaAdmin, (tratativaAdmin) => tratativaAdmin.origin_user_id)
  tratativasAdmin: TratativaAdmin[];

  @OneToMany(() => TratativaAdmin, (tratativaAdmin) => tratativaAdmin.solved_by_id)
  solvedTratativasAdmin: TratativaAdmin[];

  @OneToMany(() => UserBooks, (userBooks) => userBooks.user_id)
  userBooks: Promise<UserBooks[]>;

  @OneToMany(() => Posts, (posts) => posts.user_id)
  posts: Posts[];

  // @OneToMany(() => Books, (books) => books.user_id)
  // books: Books[];
}
