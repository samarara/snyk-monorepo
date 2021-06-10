const express = require('express')
const app = express()
const port = 30001

app.get('/', (req, res) => {
  res.send('Hello server a')
})

app.listen(port, () => {
  console.log(`server-a listening at http://localhost:${port}`)
})