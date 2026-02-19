const http=require('http');
const fs=require('fs')
const home=fs.readFileSync('./a.html')
const myserver=http.createServer((req,res)=>{
res.end(home);
})
myserver.listen(8000,()=>console.log("Server is run"))