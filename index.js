const express = require('express');
const User = require('./db/User');

require ('./db/config')
const app = express()

app.use(express.json())

app.post('/register',async(req,resp)=>{
  const data = new User(req.body);
  const result = await data.save();
  resp.send(result)
 console.log(req.body)
})

 app.listen(4000);
 //added for demoo  its added by sahil new for main newwww  last pull