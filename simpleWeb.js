const http = require('http');

http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  // res.end('hi');

  let result = req.url;
  res.end(result);

  // if(req.url === '/hello') {
  //   res.end('hello');
  // }
  // else if(req.url === '/hi') {
  //   res.end('hi');
  // }
  // else {
  //   res.end('hello world');
  // }
}).listen(7777);
