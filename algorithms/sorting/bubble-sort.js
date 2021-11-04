/**
 * bubble sort for sorting array for numbers in ascending order
 * @param {Array} unsorted Array of numbers
 * @returns {Array} - sorted Array of number
 */
function bubbleSort(array) {
  const arr = [...array];

  for(let currentPass = 0; currentPass < arr.length; currentPass++) {
    for(let currentIndex = 0; currentIndex < arr.length; currentIndex++) {
      // swaps two consecutive elements if they are not in ascending order.
      if(arr[currentIndex] > arr[currentIndex + 1]) {
        const temp = arr[currentIndex];
        arr[currentIndex] = arr[currentIndex + 1];
        arr[currentIndex + 1] = temp;
      }
    }
  }

  return arr;
}

console.log(
  bubbleSort([4, 3, 2, 10, 12, 1, 5, 6])
);
