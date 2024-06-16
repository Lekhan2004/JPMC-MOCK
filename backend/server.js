const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs'); 
const { MongoClient } = require('mongodb');
require('dotenv').config()

const app = express();

app.use(cors());
app.use(express.json());

const url = 'mongodb+srv://dhulikonaadmin:mmkpOkxtiISz8DBn@cluster0.12tcr9y.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
const dbName = 'dhulikonaadmin';

const client = new MongoClient(url);

async function connect() {
    try {
        await client.connect();
        console.log('Connected successfully to MongoDB');

        const db = client.db(dbName);
        // // // Perform actions on the collection object
        const users = db.collection('users')
        const pumpoperater = db.collection('pumpoperater')


        app.set('users', users)
        app.set('pumpoperater', pumpoperater)
    } catch (err) {
        console.error(err);
    }
}


connect();

const userApp = require('./api/userroute')
const auth = require('./api/auth')
app.use('/users', userApp)
app.use('/', auth)

app.listen(5000, ()=> console.log("server running on port 5000"));  

