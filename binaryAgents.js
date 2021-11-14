function binaryAgent(str) {
  //convert to array - so I can iterate through blocks of code
  let arr = str.split(" ");
  str = "";
  for(let element of arr){//
    //convert binary to decimal number
    let decimal = parseInt(element, 2); //binary base
    str += String.fromCharCode(decimal); //creating the string
  }
  return str;
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");
