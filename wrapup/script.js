function secondLargest(arr) {
  let firstLargest = -Infinity, secondLargest = -Infinity;
  if (arr.length < 2) {
    return "Array should have at least two numbers";
  }
  for (let i = 0; i < arr.length; i++){
    if (arr[i] > firstLargest) {
      secondLargest = firstLargest;
      firstLargest = arr[i];
    } else if (arr[i] > secondLargest && arr[i] != firstLargest) {
      secondLargest = arr[i];
    }
  }
  return secondLargest === -Infinity ? "No second largest found" : secondLargest;
}
let array = [4];
let result = secondLargest(array);
console.log("Second largest "+ result);
console.log("Second largest "+ secondLargest([0, 3, 5, 2, 7, 9]));