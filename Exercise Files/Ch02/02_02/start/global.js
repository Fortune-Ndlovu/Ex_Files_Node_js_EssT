const path = require("path");

console.log(__dirname);
console.log(`The file path is ${path.basename(__filename)}`);

for (let key in global) {
    console.log(key);
}