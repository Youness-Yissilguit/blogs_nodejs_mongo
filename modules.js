// const myData = require('./includes');
// console.log('hello ' + myData.ppl[0])
// console.log('your age is: ' + myData.age[0])
// myData.sayHey();

// console.log(myData);

const {ppl, age, sayHey} = require('./includes')//only export what u need
 
console.log('hello ' + ppl[0])
console.log('your age is: ' + age[0])
sayHey();



const os = require('os');
console.log(os.platform())
console.log(os.homedir())

