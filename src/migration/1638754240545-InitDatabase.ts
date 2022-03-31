import {MigrationInterface, QueryRunner} from 'typeorm'

export class initDatabase1638754240545 implements MigrationInterface {
  name = 'initDatabase1638754240545'

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('CREATE TABLE "exchange_rates" ("id" varchar(20) PRIMARY KEY NOT NULL, "created" datetime NOT NULL DEFAULT (datetime(\'now\')), "date" datetime NOT NULL, "isoCode" varchar(3) NOT NULL, "rate" decimal NOT NULL, "backfilled" boolean, CONSTRAINT "UQ_RATE" UNIQUE ("isoCode", "date", "rate", "backfilled"))')
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('DROP TABLE "exchange_rates"')
  }

}
