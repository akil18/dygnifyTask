const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
require('dotenv').config();
const app = express();
const port = 5000 || process.env.PORT;

// Middleware
app.use(express.json());
app.use(cors());

//Database Connection
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.nvyyp05.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

// API
async function run() {
    try {
        const formDetailsCollection = client.db('dygnifyDB').collection('formDetails');

        // Post Form Details
        app.post('/formDetails', async (req, res) => {
            const formDetails = req.body;
            const result = await formDetailsCollection.insertOne(formDetails);
            res.json(result);
        });
    }
    finally {}
}

run().catch(console.log);

app.get('/', (req, res) => {
    res.send('Server is up');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});