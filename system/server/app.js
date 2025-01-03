import express from 'express';

const app=express();


app.get('/',(req,res)=>{
    res.status(200).send(`this route runing `);
})

const port=process.env.port||4000;

app.listen(port,(err)=>{
    if(err){console.log(err)}
    console.log(`the server is runing on port :${port}`)
})