import jap from 'jap'
import {json} from 'express'

function express (api, resolve = true, reject = true, context) {
  return (req, res) => {
    json()(req, res, e => {
      if (!e) {
        const promises = []
        const result = jap(new api(req, res), req.body, resolve, reject, promises, context || api)
        const done = () => res.end(JSON.stringify(result))
        if (promises.length) {
          Promise.all(promises).then(done, done)
        } else {
          done()
        }
      }
    })
  }
}

export default express
