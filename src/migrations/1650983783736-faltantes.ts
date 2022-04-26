import {MigrationInterface, QueryRunner} from "typeorm";

export class faltantes1650983783736 implements MigrationInterface {
    name = 'faltantes1650983783736'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "books" ADD "userIdId" uuid`);
        await queryRunner.query(`ALTER TABLE "books" ADD CONSTRAINT "FK_404575c76cc37337a97fff7e69e" FOREIGN KEY ("userIdId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "books" DROP CONSTRAINT "FK_404575c76cc37337a97fff7e69e"`);
        await queryRunner.query(`ALTER TABLE "books" DROP COLUMN "userIdId"`);
    }

}
