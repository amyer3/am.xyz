const { Sequelize, DataTypes } = require('sequelize')

const sequelize = new Sequelize({
    dialect: "sqlite",
    storage: './data/database.sqlite'
})

const Users = sequelize.define("user", {
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING
        // allowNull defaults to true
    },
    email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
        primaryKey: true
    },
    password: {
        type: DataTypes.STRING
    },
    uuid: {
        type: DataTypes.UUID,
        unique: true,
        defaultValue: sequelize.UUIDV4
    }
},
    {
        tableName: "Users"
    }
)
const Posts = sequelize.define("post", {
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
}, {
    tableName: "Posts"
}
)

Users.hasMany(Posts,
    {
        as: 'Posts',
        foreignKey: 'id'
    })
Posts.belongsTo(Users, {
    as: 'Users',
    foreignKey: 'email'
})

module.exports = sequelize