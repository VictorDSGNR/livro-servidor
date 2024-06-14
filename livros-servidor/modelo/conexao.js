const mongoose = require('mongoose');
const uri = 'mongodb://localhost:27017/livraria';

const options = {
 useUnifiedTopology: true,
 useNewUrlParser: true
};

mongoose.connect(uri, options)
 .then(() => console.log('Conexão com o banco de dados estabelecida com sucesso.'))
 .catch(err => console.error('Erro na conexão com o banco de dados:', err));

const banco = mongoose.connection;
module.exports = { banco };

