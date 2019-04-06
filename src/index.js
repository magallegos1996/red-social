const express = require('express');
const config = require('./server/config');

//se ejecuta la DB
require('./database');
// se ejecuta el servidor
const app = config(express());

app.listen(app.get('port'), ()=>{
    console.log('Server on port', app.get('port'));
});
