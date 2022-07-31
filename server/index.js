const express = require('express')
require('dotenv').config()
const fs = require('fs')
const path = require('path')
const cors = require('cors')

const {getUsers, postUser} = require('./controllers/db-queries')
const router = require('./controllers/router')







const PORT = 3000 && process.env.PORT

const app = express()
app.use(express.json())
// app.all('*', function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "X-Requested-With");
//   res.header('Access-Control-Allow-Headers', 'Content-Type');
//   next();
// });
app.use(express.static(path.join(__dirname, '..', 'client', 'build')))


app.use('/', router)


app.listen(PORT, () => {
  console.log(`server started at ${PORT} port`)
})
