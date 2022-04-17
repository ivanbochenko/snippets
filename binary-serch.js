let array = [...Array(100).keys()]
let result = binarySearch(array, 33);

function binarySearch(sortedArray, key){
  let start = 0;
  let end = sortedArray.length - 1;
  let iterator = 0
  while (start <= end) {
    let middle = Math.floor((start + end) / 2);
    iterator+=1
    console.log(iterator);
    if (sortedArray[middle] === key) {
      // found the key
      return middle;
    } else if (sortedArray[middle] < key) {
      // searching to the right
      start = middle + 1;
    } else {
      // searching to the left
      end = middle - 1;
    }
  }
// key wasn't found
  return 'Not found';
}

console.log(result);