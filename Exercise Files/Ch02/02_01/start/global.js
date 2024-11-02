let hello = "Hello world from Node.js";
let justNode = hello.slice(17);
console.log(`Who let the ${justNode} out?`);

////An Example Node.js Application
const { createServer } = require('node:http');
const hostname = '127.0.0.1';
const port = 3000;
const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

// We set the Content-Type header
res.setHeader('Content-Type', 'text/plain');

//  we close the response, adding the content as an argument to end()
res.end('Hello World\n');

// TypeScript code
type User = {
  name: string;
  age: number;
};

function isAdult(user: User): boolean {
  return user.age >= 18;
}

const justine = {
  name: 'Justine',
  age: 23,
} satisfies User;

const isJustineAnAdult = isAdult(justine);
