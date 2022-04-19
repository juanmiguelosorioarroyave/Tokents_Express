const express = require('express');
const JWT = require('jsonwebtoken')
const req = require('express/lib/request');
const res = require('express/lib/response');
const personas = [{
    id:1,
    name:"Juan"
  },{
    id:2,
    name:"Kleverman"
  }]
const app = express();
const PORT = process.env.PORT || 4000
app.get('/',(req,res)=>{
  res.status(200).json({
    message:"Funciona"
  })
})
app.get('/v1/personas',(req,res)=> { 
    const Tokent = JWT.sign({personas},"123")
    res.status(200).json(Tokent)
})

app.get('/v1/decode/:tokent',(req,res)=>{
    const tokenDecodificado = JWT.decode(req.params.tokent)
    res.send(tokenDecodificado)
})
app.listen(PORT,()=> console.log('Server running on port ' + PORT))

