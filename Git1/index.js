const express = require("express")


const app = express()

app.get("/",(req,res)=>{

      res.send("This is Git 1")
})

app.listen(8000)