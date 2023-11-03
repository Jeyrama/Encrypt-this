/*
You want to create secret messages, here are the conditions:

  Your message is a string containing space separated words.
  You need to encrypt each word in the message using the following rules:

    The first letter must be converted to its ASCII code.
    The second letter must be switched with the last letter
    Keepin' it simple: There are no special characters in the input.

Examples:

  encryptThis("Hello") === "72olle"
  encryptThis("good") === "103doo"
  encryptThis("hello world") === "104olle 119drlo"
*/


// Solution

const encryptThis = text => text
  .split(' ')
  .map(word => word
  .replace(/(^\w)(\w)(\w*)(\w$)/, `$1$4$3$2`)
  .replace(/^\w/, word.charCodeAt(0)))
  .join(' ');

// or

const encryptWord = w => {
  const first = w.charCodeAt(0);
  let res;
  switch (w.length) {
    case 0: return '';
    case 1: return first;
    case 2: res = [first, w[1]]; break;
    case 3: res = [first, w[2], w[1]]; break;
    default: res = [first, w.slice(-1), w.slice(2,-1), w[1]]; break;
  }
  return res.join('');
};

const encryptThisText = text => text.split(' ').map(encryptWord).join(' ');

// or

let encryptThisWord= function(text) {
  const textArr = text.split(' ');
  
  let encrypted = ``; // store the encrypted text
  
  for (const word of textArr){
  	 let len = word.length;
  	 let crypt;
  	 // get the ASCII code of the first letter
  	 let char = word.charCodeAt(0);
  	 crypt = `${char}`;
  	 	
  	 if (len > 2){
       // works for words' greater than 2
  	   crypt += `${word[len-1]}${word.slice(2, len-1)}${word[1]}`
  	 } else if (len == 2){
  	 	 crypt += `${word.slice(1)}`
  	 } else{
       // assumes it is a single letter
     }
  	 encrypted += crypt + ' ';
  }
  encrypted = encrypted.trim(); // removes trailing spaces
  return encrypted;
}