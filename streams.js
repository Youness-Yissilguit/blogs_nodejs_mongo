const fs = require('fs');

const readStream = fs.createReadStream(
        './assets/global_style.css', 
        {encoding: 'utf8'}
    );
const writeStream = fs.createWriteStream(
        './docs/blog.txt'
    );

// readStream.on('data', (chunk)=>{
//     // console.log(chunk.toString());
//     writeStream.write("\nNew Chunk\n");
//     writeStream.write(chunk);
// })

//piping
readStream.pipe(writeStream)