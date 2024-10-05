const fs = require("fs");

// fs.renameSync("./lib/config.js", "./lib/project-config.js");

// console.log("Config.js file renamed");

// fs.rename("./lib/notes.md", "./notes.md", function(err) {
//     if(err) {
//         throw err;
//     }
//     console.log("Notes markdown file has been successfully renamed");
// });

// fs.unlinkSync("./lib/project-config.js");

fs.unlink("note.md", function(err) {
    if(err) {
        throw err;
    }
    console.log("Note are gone");
});