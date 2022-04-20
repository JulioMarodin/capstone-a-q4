import {MigrationInterface, QueryRunner} from "typeorm";
import { hashSync } from "bcryptjs";
import dotenv from 'dotenv';

dotenv.config();

export class createTables1650482042902 implements MigrationInterface {
    name = 'createTables1650482042902'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "genres" ("id" SERIAL NOT NULL, "name" character varying(128) NOT NULL, CONSTRAINT "UQ_f105f8230a83b86a346427de94d" UNIQUE ("name"), CONSTRAINT "PK_80ecd718f0f00dde5d77a9be842" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "publishers" ("id" SERIAL NOT NULL, "name" character varying(128) NOT NULL, "booksId" integer, CONSTRAINT "UQ_39082806f986a63cd7dcf1782a5" UNIQUE ("name"), CONSTRAINT "PK_9d73f23749dca512efc3ccbea6a" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "post_like" ("id" SERIAL NOT NULL, "like" boolean NOT NULL DEFAULT false, "deslike" boolean NOT NULL DEFAULT false, "postId" integer, CONSTRAINT "PK_0e95caa8a8b56d7797569cf5dc6" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "posts_types" ("id" SERIAL NOT NULL, "type" character varying NOT NULL, "visible" boolean NOT NULL DEFAULT false, CONSTRAINT "UQ_78855373b2bcb1572def696e401" UNIQUE ("type"), CONSTRAINT "PK_0b6b3c1cddfd24e1fe3d9f3ac9c" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "tratativaAdmin" ("id" SERIAL NOT NULL, "sorted_out" boolean NOT NULL DEFAULT false, "description" character varying NOT NULL, "resolution" character varying NOT NULL, "endpoint" character varying NOT NULL, "originUserIdId" uuid, "solvedByIdId" uuid, CONSTRAINT "PK_5d6d0127c8ec548febb2cf06d77" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user_books" ("id" SERIAL NOT NULL, "read" boolean NOT NULL DEFAULT false, "reading" boolean NOT NULL DEFAULT false, "want_to_read" boolean NOT NULL DEFAULT false, "favorites" boolean NOT NULL DEFAULT false, "rating" integer NOT NULL, "userIdId" uuid, "bookIdId" integer, CONSTRAINT "PK_629bc1a648860619b0f75f5dfe6" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "users" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(128) NOT NULL, "email" character varying(128) NOT NULL, "password" character varying NOT NULL, "biography" character varying NOT NULL, "birthday" TIMESTAMP NOT NULL, "city" character varying(128) NOT NULL, "admin" boolean NOT NULL DEFAULT false, CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "posts" ("id" SERIAL NOT NULL, "visible" boolean NOT NULL DEFAULT false, "create_date" TIMESTAMP NOT NULL DEFAULT now(), "update_date" TIMESTAMP NOT NULL DEFAULT now(), "description" character varying NOT NULL, "image" character varying NOT NULL, "total_like" integer NOT NULL DEFAULT '0', "total_dislike" integer NOT NULL DEFAULT '0', "userIdId" uuid, "bookId" integer, "typeIdId" integer, "authorIdId" integer, CONSTRAINT "PK_2829ac61eff60fcec60d7274b9e" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "books" ("id" SERIAL NOT NULL, "rating" integer NOT NULL DEFAULT '0', "number_reviews" integer NOT NULL DEFAULT '0', "isbn" character varying(13) NOT NULL, "title" character varying(128) NOT NULL, "volume" integer NOT NULL, "cover_image" character varying NOT NULL, "released_date" TIMESTAMP NOT NULL, "number_pages" integer NOT NULL, "publisherId" integer, "authorId" integer, CONSTRAINT "PK_f3f2f25a099d24e12545b70b022" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "authors" ("id" SERIAL NOT NULL, "name" character varying(128) NOT NULL, "country" character varying(128), "birthday" TIMESTAMP, "death_date" TIMESTAMP, CONSTRAINT "UQ_6c64b3df09e6774438aeca7e0b0" UNIQUE ("name"), CONSTRAINT "PK_d2ed02fabd9b52847ccb85e6b88" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "books_genre_genres" ("booksId" integer NOT NULL, "genresId" integer NOT NULL, CONSTRAINT "PK_f4a44b2bb6c55c39cbae989c7ab" PRIMARY KEY ("booksId", "genresId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_da41964a8550fb800fefcd2fdb" ON "books_genre_genres" ("booksId") `);
        await queryRunner.query(`CREATE INDEX "IDX_6249a7b8829da2f05f3fa8a585" ON "books_genre_genres" ("genresId") `);
        await queryRunner.query(`ALTER TABLE "publishers" ADD CONSTRAINT "FK_090dc6e675f5880ac92bb2b7a69" FOREIGN KEY ("booksId") REFERENCES "books"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "post_like" ADD CONSTRAINT "FK_789b3f929eb3d8760419f87c8a9" FOREIGN KEY ("postId") REFERENCES "posts"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "tratativaAdmin" ADD CONSTRAINT "FK_3d6126744e9c365b3e6d2a020f7" FOREIGN KEY ("originUserIdId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "tratativaAdmin" ADD CONSTRAINT "FK_2d17a0943a354173cdf6a6d871d" FOREIGN KEY ("solvedByIdId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user_books" ADD CONSTRAINT "FK_f15232ddef1406989917dd79711" FOREIGN KEY ("userIdId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user_books" ADD CONSTRAINT "FK_6ac88f6d8683f735cb66cd8da5a" FOREIGN KEY ("bookIdId") REFERENCES "books"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "posts" ADD CONSTRAINT "FK_869a05340ed4bc3b904ed040206" FOREIGN KEY ("userIdId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "posts" ADD CONSTRAINT "FK_b3a51128afb1b31ef0d2dd030d3" FOREIGN KEY ("bookId") REFERENCES "books"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "posts" ADD CONSTRAINT "FK_5e1605b1635ab61a96a892a2e53" FOREIGN KEY ("typeIdId") REFERENCES "posts_types"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "posts" ADD CONSTRAINT "FK_ff800d1b5262cfbd4eac31c607a" FOREIGN KEY ("authorIdId") REFERENCES "authors"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "books" ADD CONSTRAINT "FK_594ad92cc478a33e51fd0e31bf3" FOREIGN KEY ("publisherId") REFERENCES "publishers"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "books" ADD CONSTRAINT "FK_54f49efe2dd4d2850e736e9ab86" FOREIGN KEY ("authorId") REFERENCES "authors"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "books_genre_genres" ADD CONSTRAINT "FK_da41964a8550fb800fefcd2fdb4" FOREIGN KEY ("booksId") REFERENCES "books"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "books_genre_genres" ADD CONSTRAINT "FK_6249a7b8829da2f05f3fa8a585b" FOREIGN KEY ("genresId") REFERENCES "genres"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`INSERT INTO "users" ("name", "email", "password", "biography", "birthday", "city", "admin") VALUES ('${process.env.ADMIN_NAME}','${process.env.ADMIN_EMAIL}',
        '(${hashSync(process.env.ADMIN_PASSWORD)}','admin','${process.env.ADMIN_BIRTHDAY}','${process.env.ADMIN_CITY}',true)`);
        await queryRunner.query(`INSERT INTO "posts_types" ("type", "visible") VALUES ('resenha','true')`);
        await queryRunner.query(`INSERT INTO "posts_types" ("type", "visible") VALUES ('comentario','true')`);
        await queryRunner.query(`INSERT INTO "posts_types" ("type", "visible") VALUES ('marcacao','false')`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "books_genre_genres" DROP CONSTRAINT "FK_6249a7b8829da2f05f3fa8a585b"`);
        await queryRunner.query(`ALTER TABLE "books_genre_genres" DROP CONSTRAINT "FK_da41964a8550fb800fefcd2fdb4"`);
        await queryRunner.query(`ALTER TABLE "books" DROP CONSTRAINT "FK_54f49efe2dd4d2850e736e9ab86"`);
        await queryRunner.query(`ALTER TABLE "books" DROP CONSTRAINT "FK_594ad92cc478a33e51fd0e31bf3"`);
        await queryRunner.query(`ALTER TABLE "posts" DROP CONSTRAINT "FK_ff800d1b5262cfbd4eac31c607a"`);
        await queryRunner.query(`ALTER TABLE "posts" DROP CONSTRAINT "FK_5e1605b1635ab61a96a892a2e53"`);
        await queryRunner.query(`ALTER TABLE "posts" DROP CONSTRAINT "FK_b3a51128afb1b31ef0d2dd030d3"`);
        await queryRunner.query(`ALTER TABLE "posts" DROP CONSTRAINT "FK_869a05340ed4bc3b904ed040206"`);
        await queryRunner.query(`ALTER TABLE "user_books" DROP CONSTRAINT "FK_6ac88f6d8683f735cb66cd8da5a"`);
        await queryRunner.query(`ALTER TABLE "user_books" DROP CONSTRAINT "FK_f15232ddef1406989917dd79711"`);
        await queryRunner.query(`ALTER TABLE "tratativaAdmin" DROP CONSTRAINT "FK_2d17a0943a354173cdf6a6d871d"`);
        await queryRunner.query(`ALTER TABLE "tratativaAdmin" DROP CONSTRAINT "FK_3d6126744e9c365b3e6d2a020f7"`);
        await queryRunner.query(`ALTER TABLE "post_like" DROP CONSTRAINT "FK_789b3f929eb3d8760419f87c8a9"`);
        await queryRunner.query(`ALTER TABLE "publishers" DROP CONSTRAINT "FK_090dc6e675f5880ac92bb2b7a69"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_6249a7b8829da2f05f3fa8a585"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_da41964a8550fb800fefcd2fdb"`);
        await queryRunner.query(`DROP TABLE "books_genre_genres"`);
        await queryRunner.query(`DROP TABLE "authors"`);
        await queryRunner.query(`DROP TABLE "books"`);
        await queryRunner.query(`DROP TABLE "posts"`);
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TABLE "user_books"`);
        await queryRunner.query(`DROP TABLE "tratativaAdmin"`);
        await queryRunner.query(`DROP TABLE "posts_types"`);
        await queryRunner.query(`DROP TABLE "post_like"`);
        await queryRunner.query(`DROP TABLE "publishers"`);
        await queryRunner.query(`DROP TABLE "genres"`);
    }

}
