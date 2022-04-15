import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class PostLike {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: false })
  like: boolean;

  @Column({ default: false })
  deslike: boolean;

}
