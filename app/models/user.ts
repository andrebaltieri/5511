/// <reference path="../_all.ts" />

import mongoose = require('mongoose');

interface IUser extends mongoose.Document {
    name: string;
}

var _schema: mongoose.Schema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    }
});

var _model = mongoose.model<IUser>('User', _schema);

class User {
    static findById(id: string): Promise<User> {
        return new Promise<IUser>((resolve, reject) => {
            _model.findById(id)
                .exec()
                .onResolve((err, user) => {
                    err ? reject(err) : resolve(new User(user));
                });
        })
    }

    private _document: IUser;

    constructor(document: IUser) {
        this._document = document;
    }

    get name(): string {
        return this._document.name;
    }
}

export = User;