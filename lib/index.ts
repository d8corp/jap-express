import jap from 'jap'
import {json} from 'express'

export type callback = (req: any, res: any) => void

export type endCallback = () => void

export default function japExpress (api, resolve = true, reject = true, start: callback = () => {}, end: callback = () => {}, context) {
  return (req, res) => {
    json()(req, res, e => {
      if (!e) {
        const promises = []
        start(req, res)
        const result = jap(typeof api === 'function' ? new api(req, res) : api, req.body, resolve, reject, promises, context || api)
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
