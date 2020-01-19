# jap/express
[npm](https://www.npmjs.com/package/jap-express) | [github](https://github.com/d8corp/jap-express)  
This is a plugin for [express](https://expressjs.com/) to use [jap](https://www.npmjs.com/package/jap).
> `japExpress(handler, resolve, reject, start, end, context)`  
### Simple example 
- Add file `index.js`
```javascript
const express = require('express')
const jap = require('jap-express')

const app = express()

app.get('/', (req, res) => res.send(''))
app.post('/', jap({test: true}))
app.listen(3000)
```
- Run the app
```bash
node index.js
```
- Open browser with `http://localhost:3000/` and run the next code in console
```javascript
fetch('/', {
  method: 'post',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },
  body: '{"test": null}'
}).then(data => data.json()).then(console.log)
```
### Classic example 
You may use classes with `jap`, this is a good way to have separately space for each request  
- Add `classic.js`
```javascript
const express = require('express')
const jap = require('jap-express')

const app = express()

class App {
  constructor (req, res) {
    this.req = req
  }
  userAgent () {
    return this.req.headers['user-agent']
  }
}

app.get('/', (req, res) => res.send(''))
app.post('/', jap(App))
app.listen(3001)

```
- Run the app
```bash
node classic.js
```
- Open browser with `http://localhost:3001/` and run the next code in console
```javascript
fetch('/', {
  method: 'post',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },
  body: '{"userAgent": null}'
}).then(data => data.json()).then(console.log)
```
### Real example
You may look at real example with [jap](https://www.npmjs.com/package/jap):
```bash
git clone https://github.com/d8corp/jap.git
cd jap
npm i
npm start
```