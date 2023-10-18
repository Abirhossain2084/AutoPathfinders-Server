const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config()
const port = process.env.PORT || 5000;

//middleware

app.use(cors());
app.use(express.json());






//mongo connection start///

user = process.env.DB_USER
pass = process.env.DB_PASS

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = `mongodb+srv://${user}:${pass}@cluster0.imav3gf.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();


    


    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);


//mongo connection end///



app.get('/',(req,res)=>{
    res.send('running')
})

app.listen(port,()=>{
    console.log(`running port : ${port}`);
})
