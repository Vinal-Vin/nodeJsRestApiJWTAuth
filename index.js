const express = require('express')
const app = express();
const dotenv = require('dotenv');
const db = require('mongoose');

dotenv.config();
//Import Routes
const authRoutes = require('./Routes/auth');

//MongoDB Connection
db.connect(process.env.DB_CONNECT_URL, () => {
    console.log("Connected to DB!.......");
}).catch(() => {
    console.log("Connection failed !.......");
});

// Middlewares
app.use(express.json());

// Route Middlewares
app.use('/api/user', authRoutes);

app.listen(3000, () => {console.log('Server is up & running')});