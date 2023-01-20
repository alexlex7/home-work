const fs = require('fs');
const {Transform } = require('stream')

const readStream = fs.createReadStream('./data/mockData.json', { highWaterMark: 1 });
const writeStream = fs.createWriteStream('./data/newData.json')

readStream.setEncoding('utf8')

const myTransform = new Transform({
  objectMode: true,
  transform(chunk, enc, callback) {
    const upperCase = chunk.toUpperCase()
    console.log(upperCase)
    callback(null, upperCase)
  }
})

readStream.pipe(myTransform).pipe(writeStream)



// const { Transform, pipeline } = require('node:stream');
// const fs = require('node:fs');

// pipeline(
//   fs.createReadStream('./data/mockData.json')
//     .setEncoding('utf8'),
//   new Transform({
//     decodeStrings: false, // Accept string input rather than Buffers
//     construct(callback) {
//       this.data = '';
//       callback();
//     },
//     transform(chunk, encoding, callback) {
//       console.log(chunk)
//       this.data += chunk;
//       callback();
//     },
//     flush(callback) {
//       try {
//         console.log(JSON.parse(this.data)) ;
//         this.push(this.data);
//         callback();
//       } catch (err) {
//         callback(err);
//       }
//     },
//   }),
//   fs.createWriteStream('./data/newData.json'),
//   (err) => {
//     if (err) {
//       console.error('failed', err);
//     } else {
//       console.log('completed');
//     }
//   },
// );

