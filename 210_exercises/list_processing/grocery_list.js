
function buyFruit(list) {
  return list.map(function (item) {
    return new Array(item[1]).fill(item[0]);
  }).reduce(function (a, b) {
    return a.concat(b);
  }, []);
}



console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]
