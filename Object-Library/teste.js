const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function removeEveryOther(arr) {
  return arr.filter(function (elem, index) {
    return index % 2 === 0;
  });
}

function countPositivesSumNegatives(input) {
  if (!input || input.length === 0) return [];
  let sum = 0;
  let pos = input.filter((elem) => {
    return elem > 0;
  });
  let neg = input.filter((elem) => {
    return elem < 0;
  });
  neg.forEach((element) => {
    sum += element;
  });
  return [pos.length, sum];
}

function twiceAsOld(dadYearsOld, sonYearsOld) {
  sum = "";
  d = dadYearsOld;
  s = sonYearsOld;
  if (d - s < 0) {
    return false;
  } else if (d - s == 0) {
    return (sum = 0);
  }
  if (d - s > d / 2) {
    while (d / 2 != s) {
      d++;
      s++;
      sum++;
    }
    return sum;
  } else {
    while (d / 2 != s) {
      d--;
      s--;
      sum++;
    }
    return sum;
  }
}
let teste = ["3:1", "2:2", "0:1", "3,2"];

const points = (games) =>
  games.reduce((output, current) => {
    return (output += current[0] > current[2] ? 3 : current[0] === current[2] ? 1 : 0);
  }, 0);

// function points(games) {
//   return games.reduce((output,current)=>{
//     let x = parseInt(current[0]);
//     let y = parseInt(current[2]);
//     let value= x>y ? 3 : x===y ? 1 : 0;
//     return output+value;
//   },0)
// }

let string = "Teste";
function doubleChar(str) {
  let a = str.split("");
  newArr = [];
  a.forEach((element) => {
    newArr.push((element += element));
  });
  return newArr.join("");
}

doubleChar(string);
function sumTwoSmallestNumbers(numbers) {
  let a = numbers.sort((a, b) => a - b);
  let removed = a.splice(0, 2);
  let sum = 0;
  removed.forEach((element) => {
    element += element;
  });
  return sum;
}

function findNextSquare(sq) {
  let currentNumber = Math.sqrt(sq);
  let nextSquare = Math.pow(currentNumber + 1, 2);
  return sq % currentNumber === 0 ? nextSquare : -1;
}

const GetSum = (a, b) => {
  let min = Math.min(a, b),
    max = Math.max(a, b);
  return ((max - min + 1) * (min + max)) / 2;
};
console.log(GetSum(10, 5));

function betterThanAverage(classPoints, yourPoints) {
  let media = classPoints.reduce((accumulator, currentValue) => accumulator + currentValue) / classPoints.length;
  return yourPoints > media ? true : false;
}

function isValidWalk(walk) {
  countNS = 0;
  countWE = 0;
  for (let i = 0; i < walk.length; i++) {
    if (walk[i] == "n") {
      countNS++;
    }
    if (walk[i] == "s") {
      countNS--;
    }
    if (walk[i] == "w") {
      countWE++;
    }
    if (walk[i] == "e") {
      countWE--;
    }
  }
  if (countNS == 0 && countWE == 0 && walk.length == 10) {
    return true;
  } else {
    return false;
  }
}
console.log(isValidWalk(["n", "s", "n", "s", "n", "s", "n", "s", "n", "s"]));
