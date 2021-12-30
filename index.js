const express = require('express')
const app = express();
const dotenv = require('dotenv');
const db = require('mongoose');

dotenv.config();

//Import Routes
const authRoutes = require('./Routes/auth');

// Route middlewares
app.use('/api/user', authRoutes);

//MongoDB Connection
db.connect(process.env.DB_CONNECT, () => {
    console.log("Connected to DB!.......");
});


app.listen(3000, () => {console.log('Server is up & running')});