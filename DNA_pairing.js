function pairElement(str) {
  let mapping = {
    "A" : "T",
    "T" : "A",
    "C" : "G",
    "G" : "C"
  };
  //option 1
  // let mainArray = [];
  // for(let char of str){
  //   let subArray = [];
  //   subArray.push(char);
  //   if(mapping[char]){
  //     subArray.push(mapping[char]);
  //   }
  //   mainArray.push(subArray);
  // }
  // return mainArray;

  //option 2
  return str.split("").map(char => new Array(char, mapping[char]));
}

pairElement("GCG");