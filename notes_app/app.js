const validator = require('validator');
const nameFromUtils = require('./utils');
const fs = require('fs');

const name = 'Alex';

console.log(name);
console.log(nameFromUtils.name);

const resultOfAddition = nameFromUtils.addNumbers(5, 6);
console.log(resultOfAddition);

console.log(validator.isEmail('dasdasdadawdasda@lblsdf.sdf'));
console.log(validator.isURL('http://sdfsdfdsfs.sdfsdfsdf.com'))
fs.writeFileSync('notes.txt', `${nameFromUtils.name}\n${resultOfAddition}`);