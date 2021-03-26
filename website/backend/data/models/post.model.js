const fields = {
    headline: {
        type: DataTypes.STRING
    },
    author: {
        type: DataTypes.STRING
    },
    prelude: {
        type: DataTypes.STRING
    },
    text: {
        type: DataTypes.STRING
    },
    id: {
        type: DataTypes.UUIDV4,
        unique: true,
        primaryKey: true
    }
}
const opts = { 
    tableName: "Posts"
    }

module.exports = {
    fields, 
    opts
}
