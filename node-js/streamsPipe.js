import * as fs from 'fs'

function main () {
  const readStream = fs.createReadStream('./data/import.csv')

  const writeStream = fs.createWriteStream('./data/export.csv')

  readStream.pipe(writeStream)

  readStream.on('end', () => { 
    console.log('Read stream ended')
  })
  
  writeStream.on('finish', () => { 
    console.log('Write stream ended')
   })
}

main()