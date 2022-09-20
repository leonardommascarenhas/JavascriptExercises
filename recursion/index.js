function sumRange(n, total = 0) {
  if (n <= 0) {
    return total;
  }
  return sumRange(n - 1, total + n);
}
console.log(sumRange(3));
