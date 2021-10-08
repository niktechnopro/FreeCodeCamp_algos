//option 1 - with RegExp
function myReplace(str, before, after) {
  if(/[A-Z]/.test(before.charAt(0))){
    after = after.slice(0,1).toUpperCase() + after.slice(1);
  }
  else{
    after = after.slice(0,1).toLowerCase() + after.slice(1);
  }
  return str.replace(before, after);
}


//option 2
function myReplace(str, before, after){
  if(before.charAt(0) === before.charAt(0).toUpperCase()){
    after = after.slice(0,1).toUpperCase() + after.slice(1);
  }
  else{
    after = after.slice(0,1).toLowerCase() + after.slice(1);
  }

  //split string and convert into array
  let modifiedStr = str.split(" ");
  console.log(modifiedStr)
  if(modifiedStr.includes(before)){
    let idx = modifiedStr.indexOf(before);
    // modify an array
    modifiedStr[idx] = after;
  }
  // convert back to string and return
  return modifiedStr.join(" ");
}




myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");


https://stackabuse.com/javascript-check-if-first-letter-of-a-string-is-upper-case/ - great Article