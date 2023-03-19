const dotenv = require("dotenv");
dotenv.config();

module.exports = {
    development: {
      client: 'pg',
      connection: {
        host: process.env.DB_HOST,
        user: process.env.USER_ID,
        password: process.env.BD_PASS,
        database: process.env.DB_NAME,
        charset: "utf8",
        ssl: true
      },
      migrations: {
        directory: './migrations',
      },
      seeds: {
        directory: './seeds',
      },
    },
  };