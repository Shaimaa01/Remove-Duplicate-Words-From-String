// function removeDuplicateWordsFrom(sentence) {
//   let wordsList = sentence.split(" ");
//   let result = [];

//   for (let i = 0; i < wordsList.length; i++) {
//     if (result.indexOf(wordsList[i]) === -1) {
//       result.push(wordsList[i]);
//     }
//   }
//   return result.join;
// }

function removeDuplicateWordsFrom(sentence) {
  // let wordsList = sentence.split(" ");
  // let newSet = new Set(wordsList);
  // // arrayFromSet = [...newSet]
  // arrayFromSet =Array.from(newSet)
  // return arrayFromSet.join(" ");

  return [...new Set(sentence.split(" "))].join(" ");
}

console.log(removeDuplicateWordsFrom("Hello Elzero Web Web Hello School"));
