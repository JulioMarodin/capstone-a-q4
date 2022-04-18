import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    OneToMany,
} from 'typeorm';

import { TratativaAdmin } from './TratativaAdmin';
import { UserBooks } from './UserBooks';

@Entity('users')
export class Users {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 128 })
  name: string;

  @Column({ length: 128 })
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

  @OneToMany((type) => TratativaAdmin, (tratativaAdmin) => tratativaAdmin.origin_user_id)
  tratativasAdmin: TratativaAdmin[];

  @OneToMany(() => TratativaAdmin, (tratativaAdmin) => tratativaAdmin.solved_by_id)
  solvedTratativasAdmin: TratativaAdmin[];

  @OneToMany(() => UserBooks, (userBooks) => userBooks.user_id)
  userBooks: UserBooks[];
}
