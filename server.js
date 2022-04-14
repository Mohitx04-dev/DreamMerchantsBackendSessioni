const express = require('express');
const app = express(); //initialises  express app
app.use(express.json());
app.use(express.urlencoded({extended : true}))
app.use('/', require('./server/routes'))

app.listen(5000)
