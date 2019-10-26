import jap from 'jap'
import {json} from 'express'

function express (api, resolve = true, reject = true, start = () => {}, end = () => {}, context) {
  return (req, res) => {
    json()(req, res, e => {
      if (!e) {
        const promises = []
        start(req, res)
        const result = jap(api, req.body, resolve, reject, promises, context || api)
        end(req, res)
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
