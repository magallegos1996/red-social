const path = require('path');
const exphbs = require('express-handlebars');
const morgan = require('morgan');
const multer = require('multer');
const express = require('express');
const routes = require('../routes/index.js');
const errorHandler = require('errorhandler');

module.exports = app => {
    //settings
    app.set('port', 3000);

    app.set('views', path.join(__dirname, '../views'));
    app.engine('.hbs', exphbs({
        defaultLayout: 'main' ,
        partialsDir: path.join(app.get('views'), 'partials'),
        layoutsDir: path.join(app.get('views'), 'layouts'),
        extname: '.hbs',
        //son funciones que pueden ser usadas en handlebars, no es lo mismo que los helpers de express
        //helpers: require('./helpers'),
    }));

    app.set('view engine', '.hbs');

    //middlewares
    app.use(morgan('dev'));

    app.use(multer({
        //cuando se suba una imagen se crearrá en la ruta /src/public/upload/temp
        dest: path.join(__dirname, '../public/upload/temp')
    }).single('image')); //para que funcione single, el DOM encargado de recibir las imagenes debe llamarse 'image'. VER index.hbs

    //sirve para obtener los datos que vienen de formularios
    app.use(express.urlencoded({
        extended: false
    }));

    app.use(express.json());

    //routes
    routes(app);

    //static files
    app.use('/public', express.static(path.join(__dirname, '../public')));

    //errorhandlers
    if(app.get('env')==='development'){
        app.use(errorHandler);
    }

    return app;
};