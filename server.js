const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World express')
})

app.listen(3000)