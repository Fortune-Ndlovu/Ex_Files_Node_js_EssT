const fs = require("fs");

fs.readdirSync("./", function(err, files) {
    if(err) {
        throw err;
    }
    console.log(files);
});

console.log("reading files...");