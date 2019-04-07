const controlador = {};

//Se crea un objeto llamado controlado que tendrá un atributo index, que es una función FAF
controlador.index = (req, res) =>{
    //Simplemente colocamos 'index' porque en el archivo de configuración ya especificamos que las vistas debe obtenerlas de la carpeta 'views'. Ni si quiera se debe poner la extensi´´on .hbs porque eso también lo especificamos. Recordar que para que la app obtenga la plantilla, se debe exportar. Esto también ya lo hicimos en el archivo de configuración, justo en la línea: 'default layout: 'main''
    res.render('index');
};
//se exporta para que pueda ser usado por otros archivos. en este caso se va a usar en el archivo routes/index.js
module.exports = controlador;

