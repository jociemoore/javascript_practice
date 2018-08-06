function transactionsFor(num, list) {
  return list.filter(function (item) {
    return item.id === num;
  });
}

function isItemAvailable(num, list) {
  var count = transactionsFor(num, list).map(function (item) {
    return item.movement === 'in' ? item.quantity : item.quantity * -1;
  }).reduce(function (total, quantity) {
    return total + quantity;
  }, 0);

  return count > 0;
}



var transactions = [ { id: 101, movement: 'in',  quantity:  5 },
                     { id: 105, movement: 'in',  quantity: 10 },
                     { id: 102, movement: 'out', quantity: 17 },
                     { id: 101, movement: 'in',  quantity: 12 },
                     { id: 103, movement: 'out', quantity: 15 },
                     { id: 102, movement: 'out', quantity: 15 },
                     { id: 105, movement: 'in',  quantity: 25 },
                     { id: 101, movement: 'out', quantity: 18 },
                     { id: 102, movement: 'in',  quantity: 22 },
                     { id: 103, movement: 'out', quantity: 15 }, ];

console.log(isItemAvailable(101, transactions));     // false
console.log(isItemAvailable(105, transactions));     // true