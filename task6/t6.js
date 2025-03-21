'use strict';
const tableLimitStr = prompt('Provide size of the multiplication table.');
const tableLimit = +tableLimitStr;

let table = document.getElementById('multTable');

for (let i = 1; i <= tableLimit; i++) {
  let column = document.createElement('tr');
  table.appendChild(column);
  for (let y = 1; y <= tableLimit; y++) {
    let result = y * i;
    let row = document.createElement('td');
    let textnode = document.createTextNode(result);
    row.appendChild(textnode);
    column.appendChild(row);
  }
  document.getElementById('multTable').appendChild(column);
}
