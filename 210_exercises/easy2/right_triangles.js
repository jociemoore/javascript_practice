
function triangle(n) {
  var stars = '';
  var spaces = ' '.repeat(n);
  var i;

  for (i = 0; i < n; i += 1) {
    stars += '*';
    spaces = spaces.slice(1);
    console.log(spaces + stars);
  }
}


triangle(5);

//     *
//    **
//   ***
//  ****
// *****

triangle(9);

//         *
//        **
//       ***
//      ****
//     *****
//    ******
//   *******
//  ********
// *********