let currentTime = 0;
const incTime = () => {
    currentTime += waitInterval;
    const p = Math.floor((currentTime/waitTime) * 100);
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    process.stdout.write(`waiting.... ${p}`);
    console.log(`waiting ${currentTime / 1000} seconds`);
};

const interval = setInterval(incTime, waitInterval);