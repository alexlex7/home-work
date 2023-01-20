import * as fs from 'fs'

// Copy file using callbacks (backpressure problem is possible)
function main () {
  const readStream = fs.createReadStream('./data/mockData.json')

const writeStream = fs.createWriteStream('./data/newData.json')
  readStream.setEncoding('utf8')

  readStream.on('data', (buffer) => { 
    console.log('============Data', buffer)
    console.log(JSON.parse(buffer))

    writeStream.write(buffer)
   })


  readStream.on('end', () => { 
    console.log('Reading is end.')
    
    writeStream.end()
 })


}

main()