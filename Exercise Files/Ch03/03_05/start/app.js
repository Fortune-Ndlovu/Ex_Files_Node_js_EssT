const events = require("events");

let emitter = new events.EventEmitter();

emitter.on("customEvent", (message, user) => {
    console.log(`${user}: ${message}`);
});

emitter.emit("customEvent", "Hello, World!", "Computer");
emitter.emit("customEvent", "That's pretty cool", "Fortune");

process.stdin.on("data", (data) => {
    const input = data.toString().trim();
    if(input === "exit") {
        emitter.emit("customEvent", "Google", "Process");
        process.exit();
    }
    emitter.emit("customEvent", data.toString().trim(), "terminal");
});