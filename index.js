const express = require('express')
const app =express()
const cors = require('cors')
// const DB_connect= require('./database/database')
const route = require('./routes')
const ErrorHandler = require('./Error/error')
const path =require("path")
require('dotenv').config()

// require('dotenv').config()
// DB_connect()
const port=4325
app.use(cors())
app.use(express.json())
app.use(ErrorHandler)
app.use(express.static(path.join(__dirname,'public')))
app.use('/',route)

app.get('*',async (req,res,next)=>{
try {
    res.send({message:"user online",status:200,success:true})
} catch (error) {
    next(error)
}
})



const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://pankajman803:VN7pMNV7IV3M8dw0@cluster0.6qmid.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
// let dbpass=process.env.DB_PASSWORD
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {

    await client.connect();
   
    await client.db("admin").command({ ping: 1 });
    console.log(" You successfully connected to MongoDB!");
  } finally {
 
    await client.close();
  }
}
run().catch(console.dir);

app.listen(port,()=>console.log("server running on "+`${port}`))