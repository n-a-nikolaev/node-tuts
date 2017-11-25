const querystring = require('querystring');
const http = require('http');
const url = require('url');
const path = require('path');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;
const mimeTypesMap = {
    'html': 'text/html',
    'js': 'text/javascript',
    'css': 'text/css',
    'jpeg': 'image/jpeg',
    'jpg': 'image/jpeg',
    'gif': 'image/gif',
    'png': 'image/png'
};
http.createServer((req, res) => {
    const uri = url.parse(req.url).pathname;
    const fileName = path.join(process.cwd(), querystring.unescape(uri));
    let stats;
    try {
        stats = fs.lstatSync(fileName);
    } catch (error) {
        console.error(error);
        redirectToNotFound(res);
        return;
    }

    if (stats.isFile()) {
        const mimeType = mimeTypesMap[fileName.split('.').reverse()[0]];
        res.writeHead(200, { 'Content-Type': mimeType });
        const file = fs.createReadStream(fileName);
        file.pipe(res);
    } else if (stats.isDirectory()) {
        res.writeHead(302, { 'Location': 'index.html' });
        res.end();
    } else {
        redirectToNotFound(res);
    }
}).listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

const redirectToNotFound = (res) => {
    res.writeHead(404, { 'Content-Type': 'html' });
    const fileStream = fs.createReadStream('404.html')
    fileStream.pipe(res);
}