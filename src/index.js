const express = require('express');
const routes = require('./routes');
const mongoose = require('mongoose');

const app = express();

//Realiza conexão com o banco de dados na nuuvem
mongoose.connect('mongodb+srv://admin:p0o9i8u7@omnistack-zjtx3.mongodb.net/test?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//Usado para que rotas as rotas aceitem json
app.use(express.json());

app.use(routes);

app.listen(3000);