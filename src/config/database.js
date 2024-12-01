const { DataSource } = require("typeorm");

const AppDataSource = new DataSource({
  type: "mysql",
  host: process.env.DB_HOST,
  port: 3306,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
//   entities: [__dirname + '/../entities/*.js'],
entities: [require("../entities/User")],
  synchronize: true,
});

module.exports = AppDataSource;
