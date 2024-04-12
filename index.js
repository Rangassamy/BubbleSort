function bubbleSort(array) {
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = 0; j < array.length - 1 - i; j++) {
      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
        console.log(array);
      }
    }
  }
  console.log(array);
}

const array = [13, 21, 1, 61, 61, 3, 6, 16, 16, 1651, 1, 16, 6, 1, 31];

bubbleSort(array);
