var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors'); // Adicionando o CORS

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var livroRouter = require('./routes/livros'); // Adicionando a rota de livros

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(cors()); // Utilizando o CORS

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/livros', livroRouter); // Adicionando a rota de livros

module.exports = app;
