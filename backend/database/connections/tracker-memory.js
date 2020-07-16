var db = require("sqlite3").verbose();
var fs = require('fs')

const Tracker_Mem_DB = function () {
    this.connection = this.connect()
    //this.connection.run("CREATE TABLE IF NOT EXISTS pixels")

    
}
Tracker_Mem_DB.prototype.connect = function () {
    return new db.Database(":memory:")
}
Tracker_Mem_DB.prototype.write = function(data){
    this.connection.write()
}
Tracker_Mem_DB.prototype.disconnect = function () {
    try {
        this.connection.close()
        return true
    } catch {
        return false
    }
}
Tracker_Mem_DB.prototype.commit_to_perm = function () {
    this.connection.run()
}

module.exports =Tracker_Mem_DB