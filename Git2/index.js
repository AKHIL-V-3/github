const express = require('express')

const app = express()

app.get("/",(req,res)=>{
      
     res.send("This is Git2")
})


app.listen(7070,()=>{
     console.log('server started at 7070');
})