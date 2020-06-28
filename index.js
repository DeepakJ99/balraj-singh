const express = require('express')
const path = require('path')
const public = path.join(__dirname,'./public');
var app = express()

const PORT = process.env.PORT || 3000
app.use(express.static(public))

app.use('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'./index.html'))
})

app.listen(PORT,()=>{
    console.log('Server is listening at '+PORT)
})