'use strict';
const x = +prompt('Provide me with the starting X coordinate');
const y = +prompt('Provide me with the starting y coordinate');

const endPoint = prompt(
  'Provide me with x and y of the end point in X,Y format'
);
const endXY = endPoint.split(',');
console.log(endXY);

const distance = Math.sqrt((endXY[0] - x) ** 2 + (endXY[1] - y) ** 2);
document.querySelector('#target').innerHTML = distance;
