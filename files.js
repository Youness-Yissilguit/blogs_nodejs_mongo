let names = 'Youness';


const test = (val)=>{
    console.log("hello", val)
}

// console.log(global)
console.log(__filename)
console.log(__dirname)

//call the module
const fs = require('fs');

//reading files
fs/fs.readFile('./docs/blog.txt', (err, data)  =>{
    if(err){
        console.log(err)
    }
    console.log(data.toString())
})

//writing files
fs.writeFile('./docs/blog.txt', 'hello from nodejs', ()=>{
    console.log('done');
})


//directories
if(!fs.existsSync('./assets')){
    fs.mkdir('./assets', (err) => { 
        if(err){
            console.log(err);
        }
        console.log('folder created');
        //writing files
        fs.writeFile('./assets/copright.txt', '', ()=>{
            console.log('done');
        })
    })
}else{
    console.log('folder already exist')
}
//remove directory 
fs.rmdir('./assets', (err)=>{
    if(err){
        console.log(err)
    }
    console.log('folder deleted')
})
//remove file
if(fs.existsSync('./docs/text.txt')){
    fs.unlink('./docstext.txt', (err)=>{
        if(err){
            console.log(err);
        }
        console.log('file deleted');
    })
}

//deleting files
