import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
class books {

  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  title: string
  
  @Column()
  cover_image: string

  @Column()
  volume: number

  @Column()
  number_pages: number

  @Column()
  released_date: Date

  @Column()
  isbn: string



}

{
	"author_id":"12536",
	"publishers_id":"63521",
}
