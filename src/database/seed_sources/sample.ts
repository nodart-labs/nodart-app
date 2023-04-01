import { OrmSeedSource, nodart } from "nodart";

export class SampleSeed extends OrmSeedSource {
  readonly seeds = <nodart.orm.OrmSeedInterface>{
    users: (client) => {
      return client("users")
        .truncate()
        .then(function () {
          // Inserts seed entries
          return client("users").insert([
            { id: 1, first_name: "John", last_name: "Connor" },
            { id: 2, first_name: "Sarah", last_name: "Connor" },
            { id: 3, first_name: "T", last_name: "800" },
            { id: 4, first_name: "T", last_name: "1000" },
          ]);
        });
    },
  };
}
