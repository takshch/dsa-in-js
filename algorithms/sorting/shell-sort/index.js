/**
 * shell sort algorithm to sort array of numbers
 * @param {Array} unsorted array of numbers
 * @returns {Array} sorted array of numbers
 */
function shellSort(array) {
  const arr = [...array];

  const swapArr = (arr, firstIndex, secondIndex) => {
    const temp = arr[firstIndex];
    arr[firstIndex] = arr[secondIndex];
    arr[secondIndex] = temp;
  }

  let gap = Math.floor(arr.length / 2);
  while(gap !== 0) {

    for(let currentIndex = 0; currentIndex < arr.length; currentIndex++) {

      // swaps current index with previous element of index of difference of gap if condition satisfy
      if(arr[currentIndex - gap] > arr[currentIndex]) {
        swapArr(arr, currentIndex - gap, currentIndex);
      }

      // swaps current index with next element of index of difference of gap if condition satisfy
      if(arr[currentIndex] > arr[currentIndex + gap]) {
        swapArr(arr, currentIndex, currentIndex + gap);
      }
    }

    gap = Math.floor(gap / 2);
  }

  return arr;
}

console.log(
  shellSort([4, 3, 2, 10, 12, 1, 5, 6])
);
//output - [1, 2,  3,  4, 5, 6, 10, 12]