import {Service} from "nodart";
import {SampleController} from "../controllers/sample_controller";

export class SampleService extends Service {

    get controller() {

        return this.scope.controller as SampleController
    }

    get orm() {

        return this.scope.app.db.orm // or this.scope.app.get('orm').call() as Orm
    }

    test() {

        const scope = {}

        Object.entries(this.scope).forEach(([entry, data]) => scope[entry] = data?.constructor)

        console.log('Sample Service scope:', scope)

        return 'OK'
    }

    /**
     * See docs: https://knexjs.org/guide/migrations.html
     */
    async testMigration() {

        const migrator = this.orm.migrator()

        await migrator.source('sample', ['users']).up()

        return 'OK'
    }

    async testModel() {

        const model = this.controller.model.sub.sample

        return model.test()
    }

}
