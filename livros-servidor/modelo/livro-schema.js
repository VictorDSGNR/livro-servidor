const mongoose = require('mongoose');
const { Schema } = mongoose;

const LivroSchema = new Schema({
    _id: Schema.Types.ObjectId,
    codEditora: Number,
    titulo: String,
    resumo: String,
    autores: [String]
});

module.exports = mongoose.model('Livro', LivroSchema, 'livros');