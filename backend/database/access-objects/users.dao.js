var db = require("sqlite3").verbose();
var fs = require('fs')

const User_DB = function () {
    this.connection = this.connect()
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