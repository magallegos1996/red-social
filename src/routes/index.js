const express = require('express');
const router = express.Router();

const home = require('../controllers/home');
const image = require('../controllers/image');

module.exports = app =>{
    router.get('/', home.index);
    router.get('/image/:image_id', image.index);

    router.post('/image/', image.create);
    router.post('/image/:image_id/like', image.like);
    router.post('/image/:image_id/comment', image.comment);

    router.delete('/image/:image_id', image.remove);
    //importante especificar que app usara routes para las rutas. Recordar que antes usabamos app.get('/', etc...). Ahora a app le reempalza router. Para mas orden
    app.use(router)
};