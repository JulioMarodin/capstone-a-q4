/* eslint-disable no-tabs */
/* eslint-disable quotes */
/* eslint-disable class-methods-use-this */
import { MigrationInterface, QueryRunner } from "typeorm";
import dotenv from "dotenv";
import { hashSync } from "bcryptjs";

dotenv.config();
export class createTables1650998871258 implements MigrationInterface {
    name = 'createTables1650998871258';

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "genres" ("id" SERIAL NOT NULL, "name" character varying(128) NOT NULL, CONSTRAINT "UQ_f105f8230a83b86a346427de94d" UNIQUE ("name"), CONSTRAINT "PK_80ecd718f0f00dde5d77a9be842" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "publishers" ("id" SERIAL NOT NULL, "name" character varying(128) NOT NULL, "booksId" integer, CONSTRAINT "UQ_39082806f986a63cd7dcf1782a5" UNIQUE ("name"), CONSTRAINT "PK_9d73f23749dca512efc3ccbea6a" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "post_like" ("id" SERIAL NOT NULL, "like" boolean NOT NULL DEFAULT false, "deslike" boolean NOT NULL DEFAULT false, "postId" integer, CONSTRAINT "PK_0e95caa8a8b56d7797569cf5dc6" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "posts_types" ("id" SERIAL NOT NULL, "type" character varying NOT NULL, "visible" boolean NOT NULL DEFAULT false, CONSTRAINT "UQ_78855373b2bcb1572def696e401" UNIQUE ("type"), CONSTRAINT "PK_0b6b3c1cddfd24e1fe3d9f3ac9c" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "tratativaAdmin" ("id" SERIAL NOT NULL, "sorted_out" boolean NOT NULL DEFAULT false, "description" character varying NOT NULL, "resolution" character varying NOT NULL, "endpoint" character varying NOT NULL, "originUserId" uuid, "solvedById" uuid, CONSTRAINT "PK_5d6d0127c8ec548febb2cf06d77" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user_books" ("id" SERIAL NOT NULL, "read" boolean NOT NULL DEFAULT false, "reading" boolean NOT NULL DEFAULT false, "want_to_read" boolean NOT NULL DEFAULT false, "favorites" boolean NOT NULL DEFAULT false, "rating" integer NOT NULL, "userId" uuid, "bookId" integer, CONSTRAINT "PK_629bc1a648860619b0f75f5dfe6" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "users" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(128) NOT NULL, "email" character varying(128) NOT NULL, "password" character varying NOT NULL, "biography" character varying NOT NULL, "birthday" TIMESTAMP NOT NULL, "city" character varying(128) NOT NULL, "admin" boolean NOT NULL DEFAULT false, CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "posts" ("id" SERIAL NOT NULL, "visible" boolean NOT NULL DEFAULT false, "create_date" TIMESTAMP NOT NULL DEFAULT now(), "update_date" TIMESTAMP NOT NULL DEFAULT now(), "description" character varying NOT NULL, "image" character varying NOT NULL, "total_like" integer NOT NULL DEFAULT '0', "total_dislike" integer NOT NULL DEFAULT '0', "userId" uuid, "bookId" integer, "typeId" integer, "authorId" integer, CONSTRAINT "PK_2829ac61eff60fcec60d7274b9e" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "books" ("id" SERIAL NOT NULL, "rating" double precision NOT NULL DEFAULT '0', "number_reviews" integer NOT NULL DEFAULT '0', "isbn" character varying(13) NOT NULL, "title" character varying(128) NOT NULL, "volume" integer NOT NULL, "cover_image" character varying NOT NULL, "released_date" TIMESTAMP NOT NULL, "number_pages" integer NOT NULL, "publisherId" integer, "authorId" integer, "userId" uuid, CONSTRAINT "PK_f3f2f25a099d24e12545b70b022" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "authors" ("id" SERIAL NOT NULL, "name" character varying(128) NOT NULL, "country" character varying(128), "birthday" TIMESTAMP, "death_date" TIMESTAMP, CONSTRAINT "UQ_6c64b3df09e6774438aeca7e0b0" UNIQUE ("name"), CONSTRAINT "PK_d2ed02fabd9b52847ccb85e6b88" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "books_genres_genres" ("booksId" integer NOT NULL, "genresId" integer NOT NULL, CONSTRAINT "PK_5773bf45b53a35762fd16cc97a0" PRIMARY KEY ("booksId", "genresId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_e1c8b5fb4c9afac80b2591b0c8" ON "books_genres_genres" ("booksId") `);
        await queryRunner.query(`CREATE INDEX "IDX_8d2218df7344c443d9ded15492" ON "books_genres_genres" ("genresId") `);
        await queryRunner.query(`ALTER TABLE "publishers" ADD CONSTRAINT "FK_090dc6e675f5880ac92bb2b7a69" FOREIGN KEY ("booksId") REFERENCES "books"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "post_like" ADD CONSTRAINT "FK_789b3f929eb3d8760419f87c8a9" FOREIGN KEY ("postId") REFERENCES "posts"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "tratativaAdmin" ADD CONSTRAINT "FK_e6eb70a67d951b7428afcaffcba" FOREIGN KEY ("originUserId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "tratativaAdmin" ADD CONSTRAINT "FK_45dd79640604f484d03033a4687" FOREIGN KEY ("solvedById") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user_books" ADD CONSTRAINT "FK_89eac0a6cb08bda7516c319c914" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user_books" ADD CONSTRAINT "FK_daa39d872eb7e189a1fea05be7c" FOREIGN KEY ("bookId") REFERENCES "books"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "posts" ADD CONSTRAINT "FK_ae05faaa55c866130abef6e1fee" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "posts" ADD CONSTRAINT "FK_b3a51128afb1b31ef0d2dd030d3" FOREIGN KEY ("bookId") REFERENCES "books"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "posts" ADD CONSTRAINT "FK_5df20cdcad8e2cf47f5cd044274" FOREIGN KEY ("typeId") REFERENCES "posts_types"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "posts" ADD CONSTRAINT "FK_c5a322ad12a7bf95460c958e80e" FOREIGN KEY ("authorId") REFERENCES "authors"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "books" ADD CONSTRAINT "FK_594ad92cc478a33e51fd0e31bf3" FOREIGN KEY ("publisherId") REFERENCES "publishers"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "books" ADD CONSTRAINT "FK_54f49efe2dd4d2850e736e9ab86" FOREIGN KEY ("authorId") REFERENCES "authors"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "books" ADD CONSTRAINT "FK_bb8627d137a861e2d5dc8d1eb20" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "books_genres_genres" ADD CONSTRAINT "FK_e1c8b5fb4c9afac80b2591b0c84" FOREIGN KEY ("booksId") REFERENCES "books"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "books_genres_genres" ADD CONSTRAINT "FK_8d2218df7344c443d9ded154921" FOREIGN KEY ("genresId") REFERENCES "genres"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(
			`INSERT INTO "users"
				("name", "email", "password", "biography", "birthday", "city", "admin")
			VALUES (
					'${process.env.ADMIN_NAME}',
					'${process.env.ADMIN_EMAIL}',
					'${hashSync(process.env.ADMIN_PASSWORD, 10)}',
					'admin',
					'${process.env.ADMIN_BIRTHDAY}',
					'${process.env.ADMIN_CITY}',true)`,
				);
        await queryRunner.query(`INSERT INTO "posts_types" ("type", "visible") VALUES ('resenha','true')`);
        await queryRunner.query(`INSERT INTO "posts_types" ("type", "visible") VALUES ('comentario','true')`);
        await queryRunner.query(`INSERT INTO "posts_types" ("type", "visible") VALUES ('marcacao','false')`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "books_genres_genres" DROP CONSTRAINT "FK_8d2218df7344c443d9ded154921"`);
        await queryRunner.query(`ALTER TABLE "books_genres_genres" DROP CONSTRAINT "FK_e1c8b5fb4c9afac80b2591b0c84"`);
        await queryRunner.query(`ALTER TABLE "books" DROP CONSTRAINT "FK_bb8627d137a861e2d5dc8d1eb20"`);
        await queryRunner.query(`ALTER TABLE "books" DROP CONSTRAINT "FK_54f49efe2dd4d2850e736e9ab86"`);
        await queryRunner.query(`ALTER TABLE "books" DROP CONSTRAINT "FK_594ad92cc478a33e51fd0e31bf3"`);
        await queryRunner.query(`ALTER TABLE "posts" DROP CONSTRAINT "FK_c5a322ad12a7bf95460c958e80e"`);
        await queryRunner.query(`ALTER TABLE "posts" DROP CONSTRAINT "FK_5df20cdcad8e2cf47f5cd044274"`);
        await queryRunner.query(`ALTER TABLE "posts" DROP CONSTRAINT "FK_b3a51128afb1b31ef0d2dd030d3"`);
        await queryRunner.query(`ALTER TABLE "posts" DROP CONSTRAINT "FK_ae05faaa55c866130abef6e1fee"`);
        await queryRunner.query(`ALTER TABLE "user_books" DROP CONSTRAINT "FK_daa39d872eb7e189a1fea05be7c"`);
        await queryRunner.query(`ALTER TABLE "user_books" DROP CONSTRAINT "FK_89eac0a6cb08bda7516c319c914"`);
        await queryRunner.query(`ALTER TABLE "tratativaAdmin" DROP CONSTRAINT "FK_45dd79640604f484d03033a4687"`);
        await queryRunner.query(`ALTER TABLE "tratativaAdmin" DROP CONSTRAINT "FK_e6eb70a67d951b7428afcaffcba"`);
        await queryRunner.query(`ALTER TABLE "post_like" DROP CONSTRAINT "FK_789b3f929eb3d8760419f87c8a9"`);
        await queryRunner.query(`ALTER TABLE "publishers" DROP CONSTRAINT "FK_090dc6e675f5880ac92bb2b7a69"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_8d2218df7344c443d9ded15492"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_e1c8b5fb4c9afac80b2591b0c8"`);
        await queryRunner.query(`DROP TABLE "books_genres_genres"`);
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
