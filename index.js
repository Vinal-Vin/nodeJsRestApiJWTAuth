const express = require('express')
const app = express();


//Import Routes
const authRoutes = require('./Routes/auth');

// Route middlewares
app.use('/api/user', authRoutes)


app.listen(3000, () => {console.log('Server is up & running')});