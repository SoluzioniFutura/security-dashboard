import csv from 'csvtojson'
import test from '../results/pshtt.csv'

const getResults = () => new Promise((resolve, reject) => {
  csv().fromFile(test)
})

export default getResults
