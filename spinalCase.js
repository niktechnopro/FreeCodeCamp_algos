function spinalCase(str) {
  let modified = "";
  for(let i = 0, n = str.length; i < n; i+=1){
    if(str[i] === " " || str[i] === "_"){
      modified += "-";
    }
    else if((i !== 0) && (str[i - 1] !== str[i-1].toUpperCase()) && (str[i] === str[i].toUpperCase()) && (str[i] !== "-")){
      modified += `-${str[i]}`;
    }
    else{
      modified += str[i];
    }
  }


  return modified.toLowerCase();
}


function spinalCase(str) {
  const regexp = /(\w)[_]?([A-Z])| /g;
  // const regexp = new RegExp(/(\w)[_]?([A-Z])| /, 'g');
  // the explanation of regex - https://regex101.com/
  return str.replace(regexp, "$1-$2").toLowerCase();
}

// spinalCase('This Is Spinal Tap');
spinalCase("AllThe-small Things");
// spinalCase("Teletubbies say Eh-oh");


// Manipulating strings is very common in development, for instance, when dealing with user input.
// Getting something out of String/Sanitizing the input et cetera (etc);


// https://regex101.com/