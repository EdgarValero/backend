const express = require('express');
const morgan = require('morgan');

const app = express();

// Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Rutas
app.get('/', (req, res) => {
	res.send('Hola Mundo');
});

app.listen(4000, () => console.log('Servidor en el puerto 4000'));