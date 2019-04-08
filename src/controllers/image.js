const path = require('path');
const fsExtra = require('fs-extra');
const libs = require('../helpers/libs');
const { Image } = require('../models/index');//hay dos formas de importar, como ya vimos antes. Podemos importar todos los modelos que esten en index, o solo uno. En este caso, estamos importando solo el modelo Image. Si no hubieramos importado solo ese modelo y hubierámos importado todos en caso de haber tenido más en Index, al momento de crear un nuevo objeto deberíamos hacer esto:
//SUPONGA:
//const Image = require('../models/index'); al momento de instanciar el objeto deberiamos hacer new Image.Image(), ya que la constante Image que estamos declarando contiene TODOS los modelos, no solo Image. De hecho, si importaramos así, un mejor nombre para la constante sería Modelos y no Image
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
        const imagenAGuardar = new Image({
            title: req.body.title,
            filename: nombreImagen + extension,
            descripcion: req.body.descripcion,
        });
        const imagenGuardada = await imagenAGuardar.save();// se guarda en la base de datos
        res.send('works' + imagenGuardada.toString()); //esto se coloca para que la pagina no quede cargando esperado respuesta del servidor. Pronto la respuesta no será solo un mensaje sino una nueva pagina. EN este caso, la imagen subida ;)
    }else{
        await fsExtra.unlink(tempPath);
        res.status(500).json({
            error: 'El formato de la imagen no es el correcto',
        })
    }
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