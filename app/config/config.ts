/// <reference path="../_all.ts" />
declare module NodeJS  {
    interface Global {
        SALT_KEY: string
    }
}

global.SALT_KEY = '743a63ff';

module.exports = {
    connectionString: 'mongodb://andrebaltieri:andrebaltieri@ds055555.mongolab.com:55555/5511'
}