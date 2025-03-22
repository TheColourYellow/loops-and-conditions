'use strict';
const tableLimitStr = prompt('Provide size of the multiplication table.');
const tableLimit = +tableLimitStr;

let table = document.getElementById('multTable');

for (let i = 1; i <= tableLimit; i++) {
  let row = document.createElement('tr');
  table.appendChild(row);
  for (let y = 1; y <= tableLimit; y++) {
    let result = y * i;
    let column = document.createElement('td');
    let textnode = document.createTextNode(result);
    column.appendChild(textnode);
    row.appendChild(column);
  }
  document.getElementById('multTable').appendChild(row);
}
