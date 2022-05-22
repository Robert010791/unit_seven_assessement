//Sum to zero function
const firstArray = [1, 4, 11, 2, 37, -4];
const secondArray = [0, 21, 33, 6, 0, -9];
const thirdArray = [0, 1, 2, 3, 4, 5];
const forthArray = [1, 3, 4, 5, 6, 34, 234, 2345, 2345, 234];

const addToZero = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let m = 0; m < arr.length; m++) {
      if (i !== m) {
        if (arr[i] + arr[m] === 0) {
          return true;
        } else {
          return false;
        }
      }
    }
  }
};

// This function will be O(n^2) because there are two for loops which would each be an O(n) or O(n) * O(n) or O(n^2)

// console.log(addToZero(forthArray));
// //Sum to zero function^^^^^

// //Unique characters function, could not figure it out
// const firstWord = 'trampoline';
// const secondWord = 'Pragmatic';
// const thirdWord = 'Robert';

// const uniqueWordFunc = (word) => {
//   const newWord = word.toLowerCase();
//   const checkedWord = newWord.split('');
//   for (let i = 0; i < checkedWord.length; i++) {
//     for (let t = 0; t < checkedWord.length; t++) {
//       //   console.log(checkedWord[t]);
//     }
//   }
// };

// uniqueWordFunc('123');

//Unique characters function, could not figure it out
