//option 1
function translatePigLatin(str) {
  const regexp = /[aeiou]/;
  let appendix = (regexp.test(str.charAt(0))) ? "way" : "ay";
  if(str.match(regexp)){//executed when finds any vowels in string
    let idx = str.match(regexp).index;//returns the index of the first match
    str = str.substring(idx) + str.substring(0,idx);
  }
  str += appendix;

  return str;
}


//option 2
// function translatePigLatin(str) {
//   let vowels = ["a","e","i","o","u"];
//   //with modern browsers can use bracket notation str[index];
//   let appendix = (vowels.includes(str.charAt(0))) ? "way" : "ay";
//   let tempStrHelper = "";
//   for(let i=0; i < str.length; i++){
//     if(vowels.includes(str.charAt(i))){
//       let firstLetters = str.substr(0, i);
//       let theRest = str.substr(i);
//       str = theRest + firstLetters + appendix;
//       break;
//     }
//     else{
//       tempStrHelper += str.charAt(i);
//     }
//   }
//   if(tempStrHelper.length && (tempStrHelper === str)){
//     str = tempStrHelper + appendix;
//   }
//   return str;
// }

// translatePigLatin("paragraphs"); // should return the string aragraphspay.

// translatePigLatin("consonant");

// translatePigLatin("california");// should return the string aliforniacay.

translatePigLatin("rhythm"); // should return the string rhythmay.