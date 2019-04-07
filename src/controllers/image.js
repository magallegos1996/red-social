const path = require('path');
const fsExtra = require('fs-extra');
const libs = require('../helpers/libs');
const controlador = {};

controlador.index = (req, res) => {
    return;
};

controlador.create = async (req, res) =>{
    //console.log(req.file); //.file es propio de multer. Este OBJETO nos permite ver la información de la imagen como el peso y eso
    //Se obtienen los datos de la imagen subida y se genera un nombre aleatorio para la misma
    const nombreImagen = libs.randomImageName();
    console.log(nombreImagen);
    const extension = path.extname(req.file.originalname).toLowerCase();
    const tempPath = req.file.path;
    const destinationPath = path.resolve(`src/public/upload/${nombreImagen}${extension}`);
    console.log(destinationPath);

    //se validan las extensiones validas
    if(extension ==='.png' || extension === '.jpg' || extension === '.jpeg' || extension === '.gif'){
        //ahora se hará uso de fs-extra (filesystem-extra) para mover las imagenes de /tmp a /uploads
        await fsExtra.rename(tempPath, destinationPath); //esta funcion de fs-extra mueve un archivo de un lugar a otro. Esta funcion es asincrona
    }

    res.send('works'); //esto se coloca para que la pagina no quede cargando esperado respuesta del servidor. Pronto la respuesta no será solo un mensaje sino una nueva pagina. EN este caso, la imagen subida ;)
};

controlador.like = (req, res) =>{
    return;
};

controlador.comment = (req, res) =>{
    return;
};

controlador.remove = (req, res) =>{
};

module.exports = controlador;