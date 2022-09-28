import {nodart} from "nodart";

/************************************************************************************************

 http routes are described using JSON notation.
 The object entry key serves as the name/path to the filename of the controller
 (without "_controller" suffix name and extension) that starts the underlying http processing.

 There are 2 ways to pass a route:
 1. As a string with parameters
 2. As an array of objects - descriptors or strings

 Examples:
 1. Passing a route as a string (URL pathname):

 export = {
      sample: 'route/to/sample/controller/:someArgumentNameAndValue/:+id?'
   }

 :+id? - This parameter passes the number "id" to the controller's action as an argument.

 Argument pointers:
 : - defines the argument
 + - converts value to a number
 ? - describes optional argument (means that it could be existed or not)

 2. As an array of objects - descriptors or strings

 export = {
      sample: [
         'route/to/sample/controller/:someArgumentNameAndValue/:+id?',
         {
             path: string,
             name?: string,
             action?: string,
             types?: {
                 [paramName: string]: typeof Number | RegExp | ((value: any) => any)
             },
         }
      ]
   }

 The descriptor object allows you to specify the name of the route, the controller's action method,
 and the regular expression or type and function that would be applied to the argument value.

 ------------------

 Besides all You can manually call the controller by HTTP route without specifying it in the configuration.

 Just call: http://url/controller_name/action and You will get it.

 ***********************************************************************************************************/

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
