'use strict';
const originTemp = prompt('Give me temperature in celsius.');
const targetTemp = originTemp * (9 / 5) + 32;
document.querySelector('#tempPlace').innerHTML = targetTemp;
