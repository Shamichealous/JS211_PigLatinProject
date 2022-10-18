'use strict';

// brings in the assert module for unit testing
const assert = require('assert');
// brings in the readline module to access the command line
const readline = require('readline');
const { getSystemErrorMap } = require('util');
// use the readline module to print out to the command line
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});




const pigLatin = (word) => {
  // Your code here
  //trim word and lowercase before translation//

        
let trimmedWord = word.trim();
let vowels = ['a', 'e' , 'i' , 'o' ,'u'] 

if(vowels.indexOf(trimmedWord[0]) > -1)
{ 
  trimmedWord = word + "yay";
  return trimmedWord;
} else {
  
  let firstMatch = word.match(/[aeious]/g)  || 0;
  // find all of the first consonants and move em to end//
    let vowel = trimmedWord.indexOf(firstMatch[0]);
    let firstConsonant = trimmedWord.substring(0, vowel)
    let leftOverWord = trimmedWord.substring(1, trimmedWord.length)
    let finalOutput = leftOverWord + firstConsonant + "ay";
      return finalOutput;
}
}












  //assuming the word is trimmed and lowercased here//
  //loop through word//
  
  // for (let i = 0; i <= word.length; i++)
  // {
  //   if 
  // console.log(word[i])
    
  // }


  //loop through words that starts with consonant until vowel//
  //take the consonants from rest of word//
  //add to the back of the changed word//
  //exit out of loop when we hit a vowel//
  //add ay to the end of changed word// 
//   firstConsonants = firstConsonants + word[0]
//   console.log("first consonant = " + firstConsonants)
//   //add capability for dealing with complex consonant words//

//   word = word.slice(1)
//   console.log("slice =" + word)
//   word = word + firstConsonants
//   console.log("slice with consonant =" + word)

//   word = word + "ay"
//   console.log("final word" + word)

//   return word;
// }
// else {

//   (vowels.includes(word))
// {
//   word = word +"yay"
  
//   return word;

// }

// }


  


// the first function called in the program to get an input from the user
// to run the function use the command: node main.js
// to close it ctrl + C
const getPrompt = () => {
  rl.question('word ', (answer) => {
    console.log( pigLatin(answer) );
    getPrompt();
  });
}

// Unit Tests
// to use them run the command: npm test main.js
// to close them ctrl + C
if (typeof describe === 'function') {

  describe('#pigLatin()', () => {
    it('should translate a simple word', () => {
      assert.equal(pigLatin('car'), 'arcay');
      assert.equal(pigLatin('dog'), 'ogday');
    });
    it('should translate a complex word', () => {
      assert.equal(pigLatin('create'), 'eatecray');
      assert.equal(pigLatin('valley'), 'alleyvay');
    });
    it('should attach "yay" if word begins with vowel', () => {
      assert.equal(pigLatin('egg'), 'eggyay');
      assert.equal(pigLatin('emission'), 'emissionyay');
    });
    it('should lowercase and trim word before translation', () => {
      assert.equal(pigLatin('HeLlO '), 'ellohay');
      assert.equal(pigLatin(' RoCkEt'), 'ocketray');
    });
  });
} else {

  getPrompt();

}






// **********
//   HINTS
// **********

// break your code into pieces and focus on one piece at a time...
// 1. if word begins with a vowel send to one function: adds "yay"
// 2. if word begins with a consonant send to another function: splices off beginning, returns word with new ending.
// 3. if multiple words, create array of words, loop over them, sending them to different functions and creating a new array with the new words.