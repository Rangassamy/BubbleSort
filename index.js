//----------------
//Nombre croissant
//----------------
let bubbleSort = (array) => {
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = 0; j < array.length - 1; j++) {
      if (array[j] > array[j + 1]) {
        [array[j + 1], array[j]] = [array[j], array[j + 1]];
      }
    }
  }
  console.log(array);
};

const array = [13, 21, 1, 61, 61, 3, 6, 16, 16, 1, 16, 6, 1, 31];

bubbleSort(array);

//------------------
//Nombre décroissant
//------------------

let bubbleSortdéc = (array) => {
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = 0; j < array.length - 1; j++) {
      if (array[j] < array[j + 1]) {
        [array[j + 1], array[j]] = [array[j], array[j + 1]];
      }
    }
  }
  console.log(array);
};

const arraydéc = [13, 21, 1, 61, 61, 3, 6, 16, 16, 1, 16, 6, 1, 31];

bubbleSortdéc(arraydéc);

//Enfaite c'est juste dans le if qu'il faut changer le signe pour pouvoir faire un trie a bulle croissant ou décroissant
