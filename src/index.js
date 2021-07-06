const express = require('express');
const morgan = require('morgan');

const app = express();
require('./dbMySQL.js');
require('./mongoDB.js');

// Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Rutas
app.use('/api/users', require('./routes/users.mysql.routes.js'));
app.use('/api/mongo/users', require('./routes/users.mongo.routes.js'));

app.listen(4000, () => console.log('Servidor en el puerto 4000'));