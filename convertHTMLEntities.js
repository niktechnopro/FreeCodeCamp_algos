//option 1
// function convertHTML(str) {
//   const mappings = {
//     "&" : "&amp;",
//     "<" : "&lt;",
//     ">" : "&gt;",
//     '"' : "&quot;",
//     "'" : "&apos;",
//   };
//   let newStr = "";
//   for(let char of str){
//     if(mappings[char]){//will run if exists
//       newStr += mappings[char];
//     }
//     else{
//       newStr += char;
//     }
//   }
//   return newStr;
// }


//option 2
function convertHTML(str) {
  const mappings = {
    "&" : "&amp;",
    "<" : "&lt;",
    ">" : "&gt;",
    '"' : "&quot;",
    "'" : "&apos;",
  };
  let newStr = "";
  for(let char of str){
    newStr += mappings[char] || char;//same as if/else conditions
  }
  return newStr;
}

convertHTML("Dolce & Gabbana");


//similar approach https://www.youtube.com/watch?v=fQCRcxtLIZ4