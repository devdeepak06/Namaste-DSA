function isPalindrome(n) {
  if (n < 0) return false;
  let rev = 0;
  let xCopy = n;
  while (n > 0) {
    let rem = n % 10;
    rev = 10 * rev + rem;
    n = Math.floor(n / 10);
  }
  return rev === xCopy;
}

console.log(isPalindrome(1234321));