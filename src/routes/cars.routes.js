const { Router } = require('express');
const router = Router();

const Cars = require('../controllers/tasks.controller.js');
const CarsController = new Cars;

const cars = require('../cars.json');

router.get('/build', async (req, res) => {
  cars.forEach(async car => {
    console.time('Tiempo de Ejecucion del auto ' + car.marca + ' ' + car.modelo);
    await CarsController.montarMotor(car.motor);
    await CarsController.montarTransmision(car.transmision);
    console.log('Auto ' + car.modelo + ' Marca ' + car.marca + ' construido');
    console.timeEnd('Tiempo de Ejecucion del auto ' + car.marca + ' ' + car.modelo);
  });
  res.json({ msg: 'Respuesta enviada' });
});

module.exports = router;