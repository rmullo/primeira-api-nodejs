const http = require('http');
const app = require('./app/app');

const PORT = 3000;

//server
const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

