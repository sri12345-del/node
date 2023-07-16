const http = require('http');

const server = http.createServer((req, res) => {
    let url = req.url
    if (url === "/home") {
        res.setHeader('Content-Type','text/html')
        res.write('<html>')
        res.write('<head><title>my first page></title></head>')
        res.write('<body><header>welcome to the home</header></body>')
        res.write('</html>')
        return res.end() 
    } else if (url === '/about') {
        res.write('<html>')
    res.write('<head><title>my first page></title></head>')
        res.write('<body><header>welcome to the about</header></body>')
        res.write('</html>')
    return res.end()
    } else if (url === '/node') {
        res.write('<html>')
        res.write('<head><title>my first page></title></head>')
            res.write('<body><header>welcome to the node</header></body>')
            res.write('</html>')
        return res.end()
    }

    
});

server.listen(3005);
