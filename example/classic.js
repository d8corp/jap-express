const express = require('express')
const jap = require('../lib/classic').default

const app = express()

class App {
  constructor (req) {
    this.req = req
  }
  userAgent () {
    return this.req.headers['user-agent']
  }
}

app.use(express.static('static'))
app.post('/', jap(App))
app.listen(3000)
