const Pool = require('pg').Pool


const {DB_NAME, DB_PASSWORD, DB_HOST, DB_USER, DB_PORT} = process.env
const pool = new Pool({
  user: DB_USER,
  password: DB_PASSWORD,
  host: DB_HOST,
  database: DB_NAME,
  port: DB_PORT
})


module.exports = pool
