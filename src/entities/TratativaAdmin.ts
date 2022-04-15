import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class TratativaAdmin {
  @PrimaryGeneratedColumn()
    id: number;

  @Column({ default: false })
    sorted_out: boolean;

  @Column({ nullable: false })
    description: string;

  @Column()
    resolution: string;

  @Column({ nullable: false })
    endpoint: string;
}
