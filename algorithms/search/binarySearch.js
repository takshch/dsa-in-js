/**
 * find element using binary search in a sorted array
 * @param {Array} arr - sorted array
 * @param {Number} key - key to be searched
 */
function binarySearch(arr, key) {
  let low = 0;
  let high = arr.length - 1;
  let mid;
  let hasKeyFound = false;

  while (low <= high) {
    mid = Math.floor((low + high) / 2);
    if (arr[mid] === key) {
      hasKeyFound = true;
      break;
    } else if (arr[mid] < key) {
      low = mid + 1;
    } else if (arr[mid] > key) {
      high = mid - 1;
    }

  }

  return hasKeyFound ? 'key exists' : "key does not exist in array";
}

console.log(
  binarySearch([0, 4, 7, 10, 14, 23, 45, 47, 53], 11)
);
