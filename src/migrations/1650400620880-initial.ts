import {MigrationInterface, QueryRunner} from "typeorm";

export class initial1650400620880 implements MigrationInterface {
    name = 'initial1650400620880'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "publishers" DROP CONSTRAINT "FK_090dc6e675f5880ac92bb2b7a69"`);
        await queryRunner.query(`ALTER TABLE "publishers" DROP COLUMN "booksId"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "publishers" ADD "booksId" integer`);
        await queryRunner.query(`ALTER TABLE "publishers" ADD CONSTRAINT "FK_090dc6e675f5880ac92bb2b7a69" FOREIGN KEY ("booksId") REFERENCES "books"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
