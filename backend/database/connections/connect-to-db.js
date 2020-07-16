var db = require("sqlite3").verbose();
var fs = require('fs')
const DB_PATH = "~/var/database/"
const TRACKER_PATH = DB_PATH + "tracker"
const PHOTOS_PATH = ""
const REVIEWS_PATH = ""
const USER_DB = ""

const Database_Obj = function(path=DB_PATH) {
    this.path = path
}
Database_Obj.prototype.connect = function() {
    if (fs.exists(DB_PATH)) {
        return db.Database(DB_PATH)
    }
}
Database_Obj.prototype.disconnect = function (connection_obj, callback) {
    connection_obj.close(callback)
}
Database_Obj.prototype.write = function () { }
Database_Obj.prototype.read = function(){}