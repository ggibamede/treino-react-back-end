const express = require('express');
const { response, request } = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/users');
const postRoutes = require('./routes/posts')


require('dotenv/config');
const cors = require('cors');
const app = express();



app.use(cors())

app.use(bodyParser.json());

app.use('/',userRoutes, postRoutes);

//Conexão com o banco
mongoose.connect(process.env.DB_CONNECTION,{ useNewUrlParser: true ,useUnifiedTopology: true },()=>{
    console.log('Conectado ao servidor');
})


app.listen(3333);

