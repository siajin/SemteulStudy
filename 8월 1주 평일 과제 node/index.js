const http = require("http");
const {odd, even} = require('./var');

console.log(odd, even);

const server = http.createServer((req, res) => {
    const url = req.url;
    console.log(url);
    if (url === "/") {
        res.write('<html>');
        res.write('main');
        res.write('<a href="/link1">link1</a>');
        res.write('<a href="/link2">link2</a>');
        res.write('</html>');
        return res.end();
    }
    else if (url === "/link1") {
        res.write('<html>');
        res.write('link1');
        res.write('<a href="/">back</a>');
        res.write('</html>');
        return res.end();
    }
    else if (url === "/link2") {
        res.write('<html>');
        res.write('link2');
        res.write('<a href="/">back</a>');
        res.write('</html>');
        return res.end();
    }
    else {
        res.write('<html>');
        res.write('Wrong approach');
        res.write('<a href="/">back</a>');
        res.write('</html>');
    }
});

server.listen(3000);