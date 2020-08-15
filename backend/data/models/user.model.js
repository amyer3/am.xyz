const fields = {
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
}
const opts = {
    tableName: "Users"

}

module.exports = {
    fields, 
    opts
}
