const csv = require('csv-parser')
const fs = require('fs')
const results = []
let domainArr = []

const csvWriter = createCsvWriter({
  path: 'results.csv',
  header: [
    { id: 'URL', title: 'URL' },
    { id: 'Age', title: 'Age' },
    { id: 'Date', title: 'Date ' },
  ],
})

fs.createReadStream('data.csv')
  .pipe(csv())
  .on('data', (data) => results.push(data))
  .on('data', (data) => domainArr.push(data.URL))
  .on('end', () => {
    const domain = domainArr.map((domain) => {
      const parts = domain.split('/')
      return parts[2]
    })
    let uniqueDomain = [
      arr.reduce((map, obj) => map.set(obj.URL, obj), new Map()).values(),
    ]
    csvWriter.writeRecords(uniqueDomain).then(() => {
      return uniqUsers, '...Done'
    })
  })
