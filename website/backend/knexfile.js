// Update with your config settings.
module.exports = {
        development: {
            client: 'pg',
            connection: 'postgres://localhost/database.data',
            migrations: {
                directory: './data/migrations'
            },
            seeds: {
                directory: './data/seeds/dev'
            },
            useNullAsDefault: true
        },

        test: {
            client: 'pg',
            connection: 'postgres://localhost/database.data',
            migrations: {
                directory: './data/migrations'
            },
            seeds: {
                directory: './data/seeds/test'
            },
            useNullAsDefault: true
        },

        production: {
            client: 'pg',
            connection: process.env.DATABASE_URL,
            migrations: {
                directory: './data/migrations'
            },
            seeds: {
                directory: './data/seeds/production'
            },
            useNullAsDefault: true
        }
    }
