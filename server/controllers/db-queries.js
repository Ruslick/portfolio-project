const db = require('../servises/db')


function getUsers() {
  return db.query('SELECT * FROM users')
}

function getOne() {
  return db.query('SELECT * FROM users')
}

function postUser(login, password) {
  if (!!login || !!password) throw new Error('Query error: login or password is empty')
  return db.query('INSERT INTO users (login, password) VALUES ($1, $2)', [login, password])
}


module.exports = {
  getUsers,
  postUser
}