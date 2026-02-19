const http = require("http");
const os = require("os");

const server = http.createServer((req, res) => {

    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Content-Type", "application/json");

    if (req.url === "/free-memory") {
        res.end(JSON.stringify({
            free_memory: os.freemem()
        }));
    }

    else if (req.url === "/total-memory") {
        res.end(JSON.stringify({
            total_memory: os.totalmem()
        }));
    }

    else if (req.url === "/cpu") {
        res.end(JSON.stringify({
            cpu: os.arch()
        }));
    }

    else if (req.url === "/user") {
        res.end(JSON.stringify({
            userinfo: os.userInfo()
        }));
    }

    else {
        res.end(JSON.stringify({ message: "Route not found" }));
    }
});

server.listen(5000, () => {
    console.log("Server running on port 5000");

    console.log("platform", os.platform());
    console.log("userinfo", os.userInfo());
    console.log("CPU", os.arch());
    console.log("free memory", os.freemem());
    console.log("total memory", os.totalmem());
    console.log("uptime", os.uptime());
    console.log("home directory", os.homedir());
    console.log("host name", os.hostname());
});