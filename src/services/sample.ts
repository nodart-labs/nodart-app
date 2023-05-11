import { Service } from "nodart";

export class SampleService extends Service {
  get orm() {
    return this.scope.app.service.db.orm; // or this.scope.app.get('orm').call() as Orm
  }

  test() {
    const scope = {};

    Object.entries(this.scope).forEach(
      ([entry, data]) => (scope[entry] = data?.constructor),
    );

    console.log("Sample Service scope:", scope);

    return "OK";
  }

  async testModel() {
    return this.scope.model().sub.sample.test();
  }
}
