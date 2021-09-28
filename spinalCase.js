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
      modified += str[i]
    }
  }


  return modified.toLowerCase();
}

spinalCase('This Is Spinal Tap');
spinalCase("AllThe-small Things");
// spinalCase("Teletubbies say Eh-oh");