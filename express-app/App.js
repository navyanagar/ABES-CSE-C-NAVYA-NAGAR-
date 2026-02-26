const express=require('express');
const app=express();
const port=8002;
// app.get('/',(req,res)=>{
//     res.send("<h1>first server page</h1>");
// });
// app.get('/about',(req,res)=>{
//     res.send("<h1>this is about page</h1>");
// });
// app.get('/img',(req,res)=>{
//     res.send("<img src=https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtmk1PHONqzC5xU2IbX-SA-zaKv7ND-69Dtg&s width=400px height=400px>");
// });

const students=[
    {
        id:1,
        name:"Ria",
        class:"B.Tech"
    },
    {
        id:2,
        name:"Mahi",
        class:"M.Tech"
    }
]
app.get('/read',(req,res)=>{
    // res.json(students);
    try{
        res.status(200).json({message:"Show all data",data:students});
    }
    catch(err)
    {
        res.status(500).json({message:"student data not found",error:err.message});

    }
});
app.get('/read/:id',(req,res)=>{
    try
    {
        const id=parseInt(req.params.id);
        const student=students.find(s=>s.id===id);
        if(!student)
        {
            return res.status(404).json({message:"student data found",students});
        }
        res.status(200).json({
            message: "student data found",
            data: student
        });

    }
    catch(err)
    {
        res.status(500).json({message:"student data not found",error:err.message});

    }
});

app.post('/add',(req,res)=>{
    try{
        const newstudent ={
            id: students.length +1,
            ...req.body
        }
        students.push(newstudent);
        res.status(201).json({message:"student data successfully added",newstudent});
    }
    catch(err)
    {
        res.status(500).json({message:"student data not found",error:err.message});

    }
});

app.listen(port,()=>{
    console.log(`server is running at http://localhost:${port}`);
});