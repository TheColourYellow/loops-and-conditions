'use strict';

const inputScore = +prompt('Input your score.');
const trueScore = Math.abs(inputScore);

let result = '';

if (trueScore <= 39) {
  result = 'Your grade is 0';
} else if (39 < trueScore && trueScore <= 51) {
  result = 'Your grade is 1';
} else if (51 < trueScore && trueScore <= 63) {
  result = 'Your grade is 2';
} else if (63 < trueScore && trueScore <= 75) {
  result = 'Your grade is 3';
} else if (75 < trueScore && trueScore <= 87) {
  result = 'Your grade is 4';
} else {
  result = 'Your grade is 5';
}
document.querySelector('#target').innerHTML = result;
