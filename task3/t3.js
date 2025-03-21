'use strict';
const sideA = +prompt('Provide me with the first side of a triangle ');
const sideB = +prompt('Provide me with the second side of a triangle.');
const sideC = +prompt('Provide me with the final side of a triangle.');

const allSidesEqual = sideA == sideB || sideB == sideC || sideC == sideA;

if (
  (sideA == sideB && sideA != sideC) ||
  (sideB == sideC && sideC != sideA) ||
  (sideA == sideC && sideA != sideB)
) {
  document.querySelector('#target').innerHTML = 'Triangle is isosceles type';
} else if (allSidesEqual) {
  document.querySelector('#target').innerHTML = 'Triangle is equilateral type';
} else if (!allSidesEqual) {
  document.querySelector('#target').innerHTML = 'Triangle is scalene type';
}
