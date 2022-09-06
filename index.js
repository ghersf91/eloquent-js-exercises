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

let min = function(x, y) {
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
	for ( i = 0; i < string.length; i++) {
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
  while(arr.length < end - start + 1) {
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
    while(arr.length < (end - start + 1) / Math.abs(step)) {
    arr.push(curr);
    curr = curr + step;
    }
  } else if (start > end) {
    while(arr.length < (start - end + 1) / Math.abs(step)) {
    arr.push(curr);
    curr = curr + step;
    }
  }
  return arr;
}
