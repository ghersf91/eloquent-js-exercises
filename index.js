// Chapter 1


// Chapter 2

// 2.1 Looping a triangle

for (let hash = '#'; hash.length <= 7; hash = hash + '#') {
  console.log(hash)
}

// 2.2 FizzBuzz

for (let num = 1; num <= 100; num += 1) {
  let output = '';
  if (num % 3 == 0) output += 'Fizz';
  if (num % 5 == 0) output += 'Buzz';
  console.log(output || num)
}

// 2.3 Chessboard

let size = 8;

let chessBoard = '';

for (let i = 0; i < size; i++) {
  for (let j = 0; j < size; j++) {
    if ((j + i) % 2 == 0) {
      chessBoard += ' ';
    } else {
      chessBoard += '#';
    }
  }
  chessBoard += '\n';
}

console.log(chessBoard)


// Chapter 3

// 3.1 Minimum

let min = function (x, y) {
  if (x < y) {
    return x;
  } else if (y < x) {
    return y;
  } else {
    return 'x and y are equal';
  }
}

// 3.2 Recursion

isEven = x => {
  if (x == 0) {
    return true;
  } else if (x == 1) {
    return false;
  } else if (x < 0) {
    return isEven(-x);
  } else {
    return isEven(x - 2);
  }
}

// 3.3 Bean counting

countChar = (string, char) => {
  let numberChar = 0;
  for (i = 0; i < string.length; i++) {
    if (string[i] === char) {
      numberChar++;
    }
  }
  return numberChar;
}

countBs = string => {
  return countChar(string, 'B');
}


// Chapter 4

// 4.1 The sum of a range

function range(start, end) {
  let arr = [];
  let curr = start;
  while (arr.length < end - start + 1) {
    arr.push(curr);
    curr++;
  }
  return arr;
}

function sum(arr) {
  let addition = 0;
  for (let elem of arr) {
    addition = addition + elem;
  }
  return addition;
}

function rangeStep(start, end, step = 1) {
  let arr = [];
  let curr = start;
  if (start < end) {
    while (arr.length < (end - start + 1) / Math.abs(step)) {
      arr.push(curr);
      curr = curr + step;
    }
  } else if (start > end) {
    while (arr.length < (start - end + 1) / Math.abs(step)) {
      arr.push(curr);
      curr = curr + step;
    }
  }
  return arr;
}

// 4.2 Reversing an array

function reverseArray(arr) {
  let revArr = [];
  for (let elem of arr) {
    revArr.unshift(elem);
  }
  return revArr;
}

function reverseArrayInPlace(arr) {
  let revArr = [];
  for (let elem of arr) {
    revArr.unshift(elem);
  }
  arr.splice(0, arr.length, ...revArr);
  return arr;
}

// Book answer to second part of the exercise (more elegant solution with swap)
// function reverseArrayInPlace(arr) {
//   for (i = 0; i < Math.floor(arr.length / 2); i++) {
//     let old = arr[i];
//     arr[i] = arr[arr.length - 1 - i];
//     arr[arr.length - 1 - i] = old;
//   }
//   return arr;
// }

// 4.3 A list

// Book answer
// function arrayToList(array) {
//   let list = null;
//   for (let i = array.length - 1; i >= 0; i--) {
//     list = { value: array[i], rest: list };
//   }
//   return list;
// }

// function listToArray(list) {
//   let array = [];
//   for (let node = list; node; node = node.rest) {
//     array.push(node.value);
//   }
//   return array;
// }

// function prepend(value, list) {
//   return { value, rest: list };
// }

// function nth(list, n) {
//   if (!list) return undefined;
//   else if (n == 0) return list.value;
//   else return nth(list.rest, n - 1);
// }

// 4.4 Deep comparison

// Book answer
// function deepEqual(a, b) {
//   if (a === b) return true;

//   if (a == null || typeof a != "object" ||
//     b == null || typeof b != "object") return false;

//   let keysA = Object.keys(a), keysB = Object.keys(b);

//   if (keysA.length != keysB.length) return false;

//   for (let key of keysA) {
//     if (!keysB.includes(key) || !deepEqual(a[key], b[key])) return false;
//   }

//   return true;
// }


// Chapter 4

