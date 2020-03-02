const {Router} = require('express');
const DevController = require('./controllers/DevController');

const routes = Router();

//Métodos HTTP: GET, POST, PUT e DELETE

//Tipos de parâmetros:
//Query Params: req.query(Filtros, ordenação, paginação, ...)
//Route Params:req.params (Identificar um recurso na alteração ou remoção)
//Body: request.body (Dados para criação ou alteração de um registro)
// index, show, store, update, destroy

routes.get('/devs', DevController.index);
routes.post('/devs', DevController.store);


module.exports = routes;