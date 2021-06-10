const express = require('express')
const app = express()
const port = 30002

app.get('/', (req, res) => {
  res.send('Hello server b')
})

app.listen(port, () => {
  console.log(`server-b listening at http://localhost:${port}`)
})