const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

app.use(bodyParser.urlencoded({ extended: false }))

app.use(cors())
app.use(bodyParser.json())
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/products/:id', function (req, res, next) {
    res.json({msg: 'This is CORS-enabled for all origins!'})
  })
  

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})