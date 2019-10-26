const express = require('express')
const jap = require('../lib').default

const app = express()

app.use(express.static('static'))
app.post('/', jap({test: 'test passed'}))

app.listen(3000)