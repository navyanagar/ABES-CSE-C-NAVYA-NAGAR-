const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end(`
            <h1>ABES ENGINEERING COLLEGE</h1>
            <a href="/about">About</a><br>
            <a href="/contact">Contact</a>`);
    }
    else if (req.url === '/about') {
        res.end(`
            <h1>ABES Engineering College</h1>
            <img src="https://www.abes.ac.in/assets/2.jpg" width="500">`);
    }
    else if (req.url === '/contact') {
        res.end(`
            <p>
            ABES Engineering College <br>
            19th KM Stone, NH-09 <br>
            Ghaziabad, Uttar Pradesh, India
            </p>`);
    }
    else {
        res.statusCode = 404;
        res.end("<h1>404 Page Not Found</h1>");
    }

});
server.listen(8000, () => console.log("Server running on port 8000"));
