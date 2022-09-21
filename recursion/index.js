function sumRange(n, total = 0) {
  if (n <= 0) {
    return total;
  }
  return sumRange(n - 1, total + n);
}
console.log(sumRange(3));

function power(num1, num2) {
  if (num2 <= 1) {
    return num1;
  }
  return num1 * power(num1, num2 - 1);
}

console.log(power(2, 4));
