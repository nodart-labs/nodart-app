import { Model } from "nodart";

export class SampleModel extends Model {
  async test() {
    /* https://knexjs.org/guide */

    const users = await this.query.select().table("users");

    console.log("Database Users:", users);

    return "OK";
  }
}
