const util = require('util');
const time = util.promisify(setTimeout);

class CarsController {
  async montarMotor(motor) {
    await time(2000);
    console.log('Motor '+ motor + ' montando');
    return;
  }
  async montarTransmision(transmision) {
    await time(3000);
    console.log('Transmision '+ transmision + ' montando');
    return;
  }
}

module.exports = CarsController;