import {nodart} from "nodart";

export = <nodart.router.RouteEntry>{
    index: [
        {
            name: 'index',
            path: '/',
        }
    ],
    sample: 'sample',
    sample2: [
        '/:foo/:+id?'
    ]
}
