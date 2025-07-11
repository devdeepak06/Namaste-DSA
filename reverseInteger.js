function reverseInteger(n) {
  let nCopy = n;
  let rev = 0;
  n = Math.abs(n);
  while (n > 0) {
    let last = n % 10;
    rev = (10 * rev) + last;
    n = Math.floor(n / 10);

  }

  let limit = Math.pow(2, 31);
  if (n < -limit || n > limit) return 0;
  return (nCopy < 0) ? - rev : rev;
}

console.log(reverseInteger(1234569));