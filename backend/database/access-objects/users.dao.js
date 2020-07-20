var db = require("../connections/connect-to-db")
var fs = require('fs')
const ENUMS = require('../utils/ENUMS')

const User_DB = function () {
    this.connection = this.connect(ENUMS.DB_PATH, ENUMS.USER_DB)
    this.connection.run(`CREATE TABLE IF NOT EXISTS users (
        email STRING NOT NULL UNIQUE,
        first_name STRING NOT NULL, 
        last_name STRING NOT NULL, 
        password STRING NOT NULL,
        role STRING NOT NULL
    );`
    )


}
User_DB.prototype.connect = function () {
    return new db.Database(":memory:")
}
User_DB.prototype.write = function (data) {
    this.connection.write()
}
User_DB.prototype.disconnect = function () {
    try {
        this.connection.close()
        return true
    } catch {
        return false
    }
}
User_DB.prototype.commit_to_perm = function () {
    this.connection.run()
}

module.exports = User_DB