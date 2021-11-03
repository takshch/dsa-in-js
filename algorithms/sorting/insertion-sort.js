
/**
 * insertion sort algoritm to sort array in ascending order
 * @param {Array} array
 * @returns {Array} sorted array
 */
function insertionSort(array) {
  const arr = [...array];

  for(let currentIndex = 0; currentIndex < arr.length; currentIndex++) {
    let startIndex = currentIndex;

    for(let nextIndex = startIndex - 1; nextIndex >= 0; nextIndex-- && startIndex--) {

      // swap two consecutive elements if they are not in ascending order
      if(arr[nextIndex] > arr[startIndex]) {
        const temp = arr[nextIndex];
        arr[nextIndex] = arr[startIndex];
        arr[startIndex] = temp;
      }
    }
  }

  return arr;
}

console.log(
  insertionSort([4, 3, 2, 10, 12, 1, 5, 6])
);
// output - [1, 2, 3, 4, 5, 6, 10, 12]