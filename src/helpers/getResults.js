import { csv } from 'd3-request'
import pshtt from '../results/pshtt.csv'
import trustymail from '../results/trustymail.csv'

const getResults = () => new Promise((resolve, reject) => {
  csv(pshtt, (error, pshttData) => {
    if (error) return reject(error)
    csv(trustymail, (error, trustymailData) => {
      if (error) return reject(error)
      resolve(pshttData.map(row => ({
        ...row,
        ...trustymailData.reduce((accumulator, current) => {
          if (current.Domain === row.Domain) {
            accumulator = {...current}
          }
          return accumulator
        }, {})
      })))
    })
  })
})

export default getResults
