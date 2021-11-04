/**
 * selection sort algorithm sorts array of number in ascending order
 * @param {Array} unsorted array of numbers
 * @returns {Array} sorted array of numbers
 */
function selectionSort(array) {
  const arr = [...array];

  for(let currentPass = 0; currentPass < arr.length; currentPass++) {

    let smallestNumberIndex;
    for(let currentIndex = currentPass; currentIndex < arr.length; currentIndex++) {
      if(!smallestNumberIndex) {
        smallestNumberIndex = currentIndex;
      } else {
        if(arr[currentIndex] < arr[smallestNumberIndex]) {
          smallestNumberIndex = currentIndex;
        }
      }
    }

    // place minimum element from unsorted part at end of sorted part.
    if(smallestNumberIndex != currentPass) {
      const temp = arr[currentPass];
      arr[currentPass] = arr[smallestNumberIndex];
      arr[smallestNumberIndex] = temp;
    }
  }

  return arr;
}

console.log(
  selectionSort([4, 3, 2, 10, 12, 1, 5, 6])
);


