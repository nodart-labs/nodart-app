import { nodart } from "nodart";

/************************************************************************************************

 http routes are described using JSON notation.
 The object entry key serves as the name/path to the filename of the controller
 (without "_controller" suffix name and extension) that starts the underlying http processing.

 There are 2 ways to describe a route:
 1. As a string with parameters
 2. As an array of descriptors (objects) or strings

 Examples:

 1. Passing a route as a string (URL pathname):

    export = {
      controller_name: "route/to/sample/controller/:parameter/:+id?",
      "path/to/controller_name:controllerAction": "@get:@post:path/:parameter",
      "path/to/controller_name": [
          "/route/one",
          "/route/two",
      ],
    }

 Parameter pointers:
   : - defines the parameter
   + - converts value to a number
   ? - describes optional parameter (means that it could be existed or not)

 2. Passing a route as an array of objects - descriptors or strings

 The descriptor object allows you to specify the name of the route,
 the controller class and its action method,
 and the regular expression or type and function that would be applied to the :parameter value.

   export = {
      sample: [
         "route/to/sample/controller/:parameter/:+id?",
         {
             path: string,
             name?: string,
             action?: string,
             controller?: (route: RouteData) => typeof Controller,
             types?: {
                 [paramName: string]: typeof Number | RegExp | ((value: any) => any)
             },
         }
      ]
   }


 ***********************************************************************************************************/

export = <nodart.router.RouteEntry>{
  index: [
    {
      name: "index",
      path: "/",
    },
  ],
  sample: "sample",
  sample2: ["/:foo/:+id?"],
  sample3: ["/var/var/:+id/var/:+id2"],
  action: [
    {
      path: "/action",
      action: "test",
    },
  ],
};
