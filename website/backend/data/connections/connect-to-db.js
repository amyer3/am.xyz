var db = require("sqlite3").verbose();
var fs = require('fs')

const Database_Obj = function () {
    
}
Database_Obj.prototype.connect = function (PATH) {
    console.log(PATH);
    
        return new db.Database(PATH, () => {})
    
}
Database_Obj.prototype.disconnect = function (connection_obj, callback) {
    connection_obj.close(callback)
}
Database_Obj.prototype.write = function () { }
Database_Obj.prototype.read = function () { }

module.exports = Database_Obj