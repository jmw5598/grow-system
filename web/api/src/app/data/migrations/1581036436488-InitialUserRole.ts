import { MigrationInterface, QueryRunner } from 'typeorm';

export class InitialUserRole1581036436488 implements MigrationInterface {
  name = 'InitialUserRole1581036436488';

  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(
      'CREATE TABLE "user" ("createdAt" datetime NOT NULL, "updatedAt" datetime NOT NULL, "id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "username" varchar NOT NULL, "password" varchar NOT NULL, CONSTRAINT "UQ_78a916df40e02a9deb1c4b75edb" UNIQUE ("username"))',
      undefined,
    );
    await queryRunner.query(
      'CREATE TABLE "role" ("createdAt" datetime NOT NULL, "updatedAt" datetime NOT NULL, "id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "role" varchar NOT NULL)',
      undefined,
    );
    await queryRunner.query(
      'CREATE TABLE "user_roles_role" ("userId" integer NOT NULL, "roleId" integer NOT NULL, PRIMARY KEY ("userId", "roleId"))',
      undefined,
    );
    await queryRunner.query(
      'CREATE INDEX "IDX_5f9286e6c25594c6b88c108db7" ON "user_roles_role" ("userId") ',
      undefined,
    );
    await queryRunner.query(
      'CREATE INDEX "IDX_4be2f7adf862634f5f803d246b" ON "user_roles_role" ("roleId") ',
      undefined,
    );
    await queryRunner.query('DROP INDEX "IDX_5f9286e6c25594c6b88c108db7"', undefined);
    await queryRunner.query('DROP INDEX "IDX_4be2f7adf862634f5f803d246b"', undefined);
    await queryRunner.query(
      'CREATE TABLE "temporary_user_roles_role" ("userId" integer NOT NULL, "roleId" integer NOT NULL, CONSTRAINT "FK_5f9286e6c25594c6b88c108db77" FOREIGN KEY ("userId") REFERENCES "user" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_4be2f7adf862634f5f803d246b8" FOREIGN KEY ("roleId") REFERENCES "role" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, PRIMARY KEY ("userId", "roleId"))',
      undefined,
    );
    await queryRunner.query(
      'INSERT INTO "temporary_user_roles_role"("userId", "roleId") SELECT "userId", "roleId" FROM "user_roles_role"',
      undefined,
    );
    await queryRunner.query('DROP TABLE "user_roles_role"', undefined);
    await queryRunner.query('ALTER TABLE "temporary_user_roles_role" RENAME TO "user_roles_role"', undefined);
    await queryRunner.query(
      'CREATE INDEX "IDX_5f9286e6c25594c6b88c108db7" ON "user_roles_role" ("userId") ',
      undefined,
    );
    await queryRunner.query(
      'CREATE INDEX "IDX_4be2f7adf862634f5f803d246b" ON "user_roles_role" ("roleId") ',
      undefined,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query('DROP INDEX "IDX_4be2f7adf862634f5f803d246b"', undefined);
    await queryRunner.query('DROP INDEX "IDX_5f9286e6c25594c6b88c108db7"', undefined);
    await queryRunner.query('ALTER TABLE "user_roles_role" RENAME TO "temporary_user_roles_role"', undefined);
    await queryRunner.query(
      'CREATE TABLE "user_roles_role" ("userId" integer NOT NULL, "roleId" integer NOT NULL, PRIMARY KEY ("userId", "roleId"))',
      undefined,
    );
    await queryRunner.query(
      'INSERT INTO "user_roles_role"("userId", "roleId") SELECT "userId", "roleId" FROM "temporary_user_roles_role"',
      undefined,
    );
    await queryRunner.query('DROP TABLE "temporary_user_roles_role"', undefined);
    await queryRunner.query(
      'CREATE INDEX "IDX_4be2f7adf862634f5f803d246b" ON "user_roles_role" ("roleId") ',
      undefined,
    );
    await queryRunner.query(
      'CREATE INDEX "IDX_5f9286e6c25594c6b88c108db7" ON "user_roles_role" ("userId") ',
      undefined,
    );
    await queryRunner.query('DROP INDEX "IDX_4be2f7adf862634f5f803d246b"', undefined);
    await queryRunner.query('DROP INDEX "IDX_5f9286e6c25594c6b88c108db7"', undefined);
    await queryRunner.query('DROP TABLE "user_roles_role"', undefined);
    await queryRunner.query('DROP TABLE "role"', undefined);
    await queryRunner.query('DROP TABLE "user"', undefined);
  }
}
