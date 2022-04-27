import {MigrationInterface, QueryRunner} from "typeorm";

export class updateEntitiesUSerUserBooksAndTratativa1651073552728 implements MigrationInterface {
    name = 'updateEntitiesUSerUserBooksAndTratativa1651073552728'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "tratativaAdmin" ALTER COLUMN "resolution" DROP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "tratativaAdmin" ALTER COLUMN "resolution" SET NOT NULL`);
    }

}
