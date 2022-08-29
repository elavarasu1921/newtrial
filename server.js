const http = require('http');
const app = require('./app');
require('dotenv').config();

const port = process.env.PORT;

app.set('port', port);
const server = http.createServer(app);

server.listen(port, () => {
    console.log(`Listening on port: ${port}`);
});