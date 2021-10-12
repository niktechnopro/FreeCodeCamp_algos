//option 1
// function fearNotLetter(str) {
//   // const alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
//   const alpha = Array.from(Array(26)).map((e, i) => i + 65);
//   //Convert a Unicode number into a character
//   const alphabet = alpha.map((x) => String.fromCharCode(x).toLocaleLowerCase());
//   //find a character in alphabet - I'll use the last letter of str
//   const firstChar = str.charAt(0);
//   const lastChar = str.charAt(str.length - 1);
//   //make a helper array in range of first and last character
//   //we need to find indexes for firstChar and lastChar in alphabet
//   const firstIndex = alphabet.indexOf(firstChar);
//   const lastIndex = alphabet.indexOf(lastChar);
//   const tempAlphabetHelper = alphabet.slice(firstIndex, lastIndex+1);
//   var difference = tempAlphabetHelper.filter(x => !str.split("").includes(x));
//   return difference[0];
// }

// fearNotLetter("abce");


//option 2
function fearNotLetter(str) {
  for (let i = 1; i < str.length; i++) {
    if (str.charCodeAt(i) - str.charCodeAt(i - 1) > 1) {//means the characters are not consecutive
      return String.fromCharCode(str.charCodeAt(i) - 1);
    }
  }
  return undefined;
}

fearNotLetter("abce");