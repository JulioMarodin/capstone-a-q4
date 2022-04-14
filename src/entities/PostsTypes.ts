import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity('posts_types')
export class PostsTypes {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({nullable: false, unique: true})
    type: string;

    @Column({default: false})
    visible: boolean;

}
