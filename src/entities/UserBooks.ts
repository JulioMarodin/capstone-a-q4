import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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
}
