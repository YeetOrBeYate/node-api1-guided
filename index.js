const express = require('express');
//This just creates out server in the first place, fist we require express form the express package and then we use it here.
const app = express();

const port = 4000;
//telling the 'app' the instance of express to listen on port 4000
app.listen(port,()=>{
    console.log(`\n API running on port:${port}\n`)
})
//This is route handling. The 'app' or 'server' is handling a get reqest to the '/' endpoint, by res.send(blablabla)
app.get("/", (req,res)=>{
    console.log("body",req.body)
    res.send({api: "up and running lol"})
})


console.log('index.js runnin refreshed');