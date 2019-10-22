/*
Global application configuration file. This file should be modified at the beginning of a new project
*/

global_config = {
    "corsOptions": {
        "origin": ["http://localhost:4200"], /* put all origin which is using your server */
        "credentials": true,
        "preflightContinue": false,
        "optionsSuccessStatus": 204,
        "maxAge": 1234,
        "allowedHeaders": ['application/json', 'Origin', 'X-Requested-With', 'Content-Type', 'Accept', 'x-client-key', 'x-client-token', 'x-client-secret', 'Authorization'],
        "allowMethods": ['GET','HEAD', 'OPTIONS', 'POST', 'PUT']
    }

};
