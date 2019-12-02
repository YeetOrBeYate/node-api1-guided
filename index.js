const express = require('express');

const db = require('./data/hubs-model');

//This just creates out server in the first place, fist we require express form the express package and then we use it here.
const app = express();

//needed to parse json from the body
app.use(express.json());

const port = 4000;
//telling the 'app' the instance of express to listen on port 4000
app.listen(port,()=>{
    console.log(`\n API running on port:${port}\n`)
})
//This is route handling. The 'app' or 'server' is handling a get reqest to the '/' endpoint, by res.send(blablabla)
app.get("/", (req,res)=>{
    console.log("body")
    res.send({api: "up and running lol"})
})

//list of hubs GET /hubs
app.get('/hubs', (req,res)=>{
    //get the list of hubs from database
    db.find()
    .then(hubs=>{
        res.status(200).json(hubs)
    })
    .catch(error=>{
        console.log('error on get /hubs', error)
        res.status(500).json({message: "error getting list of hubs from db"})
    })
})

app.post("/hubs", (req,res)=>{
    const hubData = req.body //express doesn't know how to parse data

    db.add(hubData)
    .then(hub=>{
        res.status(201).json(hub);
    })
    .catch(err=>{
        console.log('error', err)
        res.status(500).json({Message: "you don messed up"})
    })
})

app.delete('/hubs/:id', (req,res)=>{
    const id = req.params.id
    db.remove(id)
    .then((hub)=>{
        
        if(!hub){
            res.status(404).json({message:"id not there"})
        }
        else{
            res.status(200).json({hub})
        }
    })
    .catch(err=>{
        res.status(500).json({message: "cant delete scrub"})
    })
})


console.log('index.js runnin refreshed');