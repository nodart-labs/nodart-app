import {typeRoute} from "nodart";

export = <typeRoute>{
    index: [
        {
            name: 'index',
            path: '/',
        }
    ],
    sample: 'sample',
    sample2: [
        '/:foo?/:+id'
    ]
}
