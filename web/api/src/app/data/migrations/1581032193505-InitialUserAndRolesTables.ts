import { MigrationInterface, QueryRunner } from 'typeorm';

export class InitialUserAndRolesTables1581032193505 implements MigrationInterface {
  name = 'InitialUserAndRolesTables1581032193505';

  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(
      'CREATE TABLE "role" ("createAt" datetime NOT NULL, "udpatedAt" datetime NOT NULL, "id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "role" varchar NOT NULL)',
      undefined,
    );
    await queryRunner.query(
      'CREATE TABLE "user" ("createAt" datetime NOT NULL, "udpatedAt" datetime NOT NULL, "id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "username" varchar NOT NULL, "password" varchar NOT NULL, CONSTRAINT "UQ_78a916df40e02a9deb1c4b75edb" UNIQUE ("username"))',
      undefined,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query('DROP TABLE "user"', undefined);
    await queryRunner.query('DROP TABLE "role"', undefined);
  }
}
