const express=require('express')
const path=require('path')

const app=express()

app.use(function(req,res,next)
{
    console.log('hello') 
    next()
})

app.get('/',function(req,res){
    res.send('hello')
})

app.get('/about',(req,res)=> res.send('about'))

app.get('/toh',(req,res)=> res.send("welcome"))

app.get('/re',function(req,res)
{
    res.sendFile(path.join(__dirname,'index.html'))

})

app.post('/signup',function(req,res){
    res.send('account created')
})

app.listen(3000,function(){
    console.log('server started')
    console.log(__filename)
})

 
   