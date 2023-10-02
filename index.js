const express=require("express")
let app=express()
const multer=require("multer")
let upload=multer({dest:"images"})

app.post("/",upload.single("img"),(req,res)=>{
    res.status(200).send("upload successfull")
})
app.get("/",(req,res)=>{
    res.status(200).sendFile(__dirname+"index.html")
})

app.listen(7777,()=>{
    console.log("server 7777");
})