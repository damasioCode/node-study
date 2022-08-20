const { sayHello } = require('./module/sayHello.js');

setTimeout(() => {
  console.log(sayHello('Damasin'));
}, 1000);