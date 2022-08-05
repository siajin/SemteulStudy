const http = require("http");
const url = require("url");

const server = http.createServer(function(req,res){
    const _url = req.url;
    const pathname = url.parse(_url, true).pathname;
    if(pathname === '/'){
        res.write('<h1>main</h1>');
        res.write('<br><a href="/link1"><h3>link1</h3></a>');
        res.write('<br><a href="/link2"><h3>link2</h3></a>');
        return res.end();
    }
    else if(pathname === '/link1'){
        res.write('<h1>link1 contents</h1>');
        res.write('<br><a href="/"><h3>back to main</h3></a>');
        return res.end();
    }
    else if(pathname === '/link2'){
        res.write('<h1>link2 contents</h1>');
        res.write('<br><a href="/"><h3>back to main</h3></a>');
        return res.end();
    }
    else{
        res.write('<h1>wrong access!</h1><br>');
        res.write('<a href="/"><h3>back to main</h3></a>')
        return res.end();
    }
})

server.listen(3000);