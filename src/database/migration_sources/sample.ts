import { OrmMigrationSource, nodart } from "nodart";

export class SampleMigration extends OrmMigrationSource {
  readonly migrations = <nodart.orm.OrmMigrationInterface>{
    users: {
      up(client) {
        return client.schema.createTable("users", function (table) {
          table.increments("id");
          table.string("first_name", 255).notNullable();
          table.string("last_name", 255).notNullable();
        });
      },
      down(client) {
        return client.schema.dropTable("users");
      },
    },
  };
}
