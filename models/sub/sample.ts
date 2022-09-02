import {Model} from "nodart";

export class SampleModel extends Model {

    async test() {

        await this.orm.seeder().source('sample').run()

        const users = await this.query.select().table('users')

        console.log('Database Users:', users)

        const migrator = this.orm.migrator()

        await migrator.source('sample', ['users']).down()

        return 'OK'
    }

}
