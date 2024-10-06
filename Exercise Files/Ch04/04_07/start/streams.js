const fs = require("fs");

let stream = fs.createReadStream(
    "./chat-logs/george-ben-chat.log", "UTF-8"
);

let data;

stream.once("data", (chunk) => {
    console.log("Read Stream Started");
    console.log("===================");
    console.log(chunk);
});


console.log("Reading the file");