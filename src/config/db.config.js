const config = {
    db: {
        user: process.env.DB_USER || "postgres",
        host: process.env.HOST || "localhost",
        database: process.env.DATABASE || "accounts",
        password: process.env.PASSWORD || "postgres@1234",
        port: 5432
    }
}


module.exports = config;