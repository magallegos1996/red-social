const mongoose = require('mongoose');
const {Schema} = mongoose;
const path = require('path');

const ImageSchema = new Schema({
    titulo: {type: String},
    descripcion: {type: String},
    filename: {type: String},
    views: {
        type: Number,
        default: 0
    },
    likes: {
        type: Number,
        default: 0,
    },
    timestamp: {
        type: Date,
        default: Date.now
    }
});
//se crea un atributo virtual para el esquema que no se almacena en la base de datos. En este caso, retornará el nombre de la imagen pero sin la extensión
ImageSchema.virtual('uniqueId').get(()=>{
    //Devolverá el nombre de la imagen sin la extensión
    return this.filename.replace(path.extname(this.filename), '');
})
//'Image' es el nombre del modelo
module.exports = mongoose.model('Image', ImageSchema);