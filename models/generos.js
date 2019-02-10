const mongoose = require('mongoose')

let Schema = mongoose.Schema

let generosSchema = new Schema({//crear nuevo esquema para mongoDB
    nombre_genero:{
        type:String,
        required: [true,'El nombre es necesario']
    }
})

module.exports = mongoose.model('Generos',generosSchema)