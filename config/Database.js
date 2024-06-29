import mysql from "mysql2";

const db = mysql
  .createConnection({
    host: "localhost",
    user: "root",
    port: "3306",
    database: "db_rentcar",
    password: "",
  })
  .promise();

export default db;
