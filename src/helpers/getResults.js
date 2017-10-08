import { csv } from 'd3-request'

const getResults = ([pshtt, trustymail]) => new Promise((resolve, reject) => {
  csv(pshtt.preview, (error, pshttData) => {
    if (error) return reject(error)
    csv(trustymail.preview, (error, trustymailData) => {
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
