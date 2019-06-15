require('./Config/db');
require('./Models/dbSchema');


const express = require('express');
const app = express();
const appRoutes = require('./Routes/appRoutes');
var bodyparser = require('body-parser');
var cors = require('cors');


app.use(cors());
app.use('/', appRoutes);

app.use(bodyparser.json());
//app.use(bodyparser.urlencoded());



app.listen(8081, ()=> { console.log('http://localhost:8081')});

