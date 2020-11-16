/**
 * 
 * The range(..) function takes a number as its first argument, 
 *  representing the first number in a desired range of numbers. 
 *  The second argument is also a number representing the end of the 
 *  desired range (inclusive). If the second argument is omitted, 
 *  then another function should be returned that expects that argument.
 * 
*/

function range(start = 0, end) {
  if (end === undefined) {
    return function singleRange(newEnd) {
      return getRange(start, newEnd);
    };
  };
  return getRange(start, end);
};

function getRange(start, end) {
  let range = [];
  while (start <= end) {
    range.push(start);
    start++;
  };
  return range;

}

console.log(range(3, 3));    // [3]
console.log(range(3, 8));    // [3,4,5,6,7,8]
console.log(range(3, 0));    // []

var start3 = range(3);
var start4 = range(4);

console.log(start3(3));     // [3]
console.log(start3(8));     // [3,4,5,6,7,8]
console.log(start3(0));     // []

console.log(start4(6));     // [4,5,6]