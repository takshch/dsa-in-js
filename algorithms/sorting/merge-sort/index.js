
/**
 * Merge sort to divide elements to individual elements or items
 * @param {Array} arr
 */
function mergeSort(arr) {
  if(arr.length === 1) return arr;

  let arrayFirst =  arr.slice(
    0,
    parseInt(arr.length / 2)
  );
  let arraySecond = arr.slice(
    parseInt(arr.length / 2),
    arr.length
  );

  arrayFirst = mergeSort(arrayFirst);
  arraySecond = mergeSort(arraySecond);

  return merge(arrayFirst, arraySecond);
}

/**
 * Sort the elements and merge into array to create sorted array
 * @param {Array} arrayFirst 
 * @param {Array} arraySecond 
 */
function merge(arrayFirst, arraySecond) {
  const arrayThird = [];

  // compare element of first with second and add smallest element to arrayThird
  while(arrayFirst.length > 0 && arraySecond.length > 0) {
    if(arrayFirst[0] < arraySecond[0]) {
      arrayThird.push(arrayFirst[0]);
      arrayFirst.shift();
    } else {
      arrayThird.push(arraySecond[0]);
      arraySecond.shift();
    }
  }

  // add remaining elements of arrayFirst or arraySecond to arrayThird
  while(arrayFirst.length > 0) {
    arrayThird.push(arrayFirst[0]);
    arrayFirst.shift();
  }

  while(arraySecond.length > 0) {
    arrayThird.push(arraySecond[0]);
    arraySecond.shift();
  }

  return arrayThird;
}


console.log(
  mergeSort([2, 8, 5, 3, 9, 4, 1, 7])
);
// [1, 2, 3, 4, 5, 7, 8, 9];
