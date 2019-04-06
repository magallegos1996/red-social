const mongoose = require('mongoose');

//'database' es el atributo del objeto creado en keys.js
const { database } = require('./keys');
mongoose.connect(database.URI, {
    useNewUrlParser: true
})
.then(db => console.log('DB IS CONNECTED'))
.catch(error => console.error(error));