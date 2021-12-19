// option 1
function whatIsInAName(collection, source) {
  var arr = [];
  // Only change code below this line
  for(let obj of collection){//iterating through array
    let b = Object.keys(source).every(key => {
      return (obj.hasOwnProperty(key) && (obj[key] === source[key]));
    })
    if(b){
      arr.push(obj);
    }
  }
  return arr;
}

// option 2
// function whatIsInAName(collection, source) {
//   return collection.filter(value => {
//     return Object.keys(source).every(key => {
//       return value[key] && (value[key] === source[key]);
//     })
//   });
// }


// option 3
// function whatIsInAName(collection, source) {
//   var arr = [];
//   let tempHelper = [];
//   let sourcePropsLength = Object.keys(source).length;
//   // Only change code below this line
//   for(let obj of collection){//iterating through array
//     //obj is an element in the array
//     tempHelper = [];
//     for(let property in source){
//       if(obj[property] && (source[property] === obj[property])){
//         tempHelper.push(obj);
//       }
//     }
//     if(tempHelper.length === sourcePropsLength){
//       arr.push(obj);
//     }
//   }
//   return arr;
// }

// whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
// should return [{ first: "Tybalt", last: "Capulet" }].

whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 });
//  should return [{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }];




