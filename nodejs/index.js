// const http=require('http');

// const myserver=http.createServer((req,res)=>{
// console.log("server1")
// res.end("this is my first server");
// if(req.url=='/'){
//     res.end("this is my home page");
// }
// else if(req.url=="/about"){
//     res.end("this is my about page");
// }
// else{
//     res.end("this is contact page");
// if(req.url === '/') {
// res.end("This is ABES College");
// }
// else if(req.url=="/about")
// {
//     res.end(<img src="https://image-static.collegedunia.com/public/reviewPhotos/1159891/IMG_20250611_203218.jpg"></img>)
// }
// else{
// res.end("ABES College is located in Ghaziabad,Uttar Pradesh");
// }
// else{
//     res.end("404 page is not fonund");
// }
// })
// myserver.listen(8000, ()=>console.log("server is run"))

// route- how to make pages connecting to the server
// if there is no page, it is null route and slash(/) is entry route


// ./ =>current directory
// Sync
// const fs=require('fs');
// // fs.writeFileSync("./cse-c.txt","hi we are coder in node")
// const result=fs.readFileSync("./cse-c.txt","utf-8");
// console.log(result);


//Async
// const fs = require('fs');
// fs.readFile("./cse-c.txt", "utf-8", (err, result) => {
//     if (err) {
//         console.log(err);
//         return;
//     }
//     console.log(result);
// });

// const fs=require('fs');
// // fs.writeFile("./a.txt","abes college is", () => { });
// fs.readFile("./a.txt","utf-8", (err,result) => { 
// if(err){
//     console.log("error",err)
// }
// else{
//     console.log(result);
// }
// })

// const fs=require('fs');
// // fs.writeFile("./a.txt","abes college is", () => { });
// fs.writeFile("./c.txt","utf=8","hello everyone", (err,result) => { 
// if(err){
//     console.log("error",err)
// }
// else{
//     console.log(result);
// }
// }) 
// //use if wala in interview

//Append
// const fs = require('fs');
// fs.appendFileSync("./a.txt", ` good`);

// const fs = require('fs');
// fs.cpSync("./a.txt","./b.txt");

// const fs = require('fs');
// fs.cp("./a.txt","./b.txt");

// const fs = require('fs');
// fs.cp("./a.txt", "./b.txt", (err) => {
//     if (err) {
//         console.log("Error:", err);
//     } else {
//         console.log("File copied successfully");
//     }
// });
