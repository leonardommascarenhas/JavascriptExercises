const A = [1, 3, 4, 2, 1, 6];
const B = [-1, -3, 4, -72, 134, 9, 7, 1, 9];

function solution(array) {
  const a = array
    .filter((x) => {
      return x > -1;
    })
    .sort((a, b) => a - b);
  let newArray = [...new Set(a)];
  let lowestOutsideNumber = newArray[0];
  for (let i = 1; i < newArray.length; i++) {
    if (lowestOutsideNumber + 1 < newArray[i]) {
      lowestOutsideNumber = lowestOutsideNumber + 1;
      break;
    } else {
      lowestOutsideNumber = newArray[i];
    }
  }
  return lowestOutsideNumber;
}
console.log(solution(A));
console.log(solution(B));
