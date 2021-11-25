function addTogether() {
  console.log("arguments: ", arguments);
  const [ first, second ] = arguments;
  //every function has an object - arguments
  if(second){//if second exists return sum
    console.log("option 1", first, second);
    if(typeof first === "number" && typeof second === "number"){
      return first + second;
    } 
  }else if(!second && typeof first === "number"){
    console.log("option 2", first, second);
    return function(num2){
      console.log("here: ", first, " num2 ", num2)
      if(typeof first === "number" && typeof num2 === "number"){
        return first + num2;
      }
    }
  }
  console.log("option 3 - default", first, second);
  return undefined;
}

addTogether(2,3);


// example of currying
// function volume(length) {
//     console.log(length)
//       return function(width) {
//         console.log(width)
//          return function(height) {
//            console.log(height)
//             return height * width * length;
//          }
//       }
//    }
// volume(11)(2)(3)

//Currying is technique of converting a function that takes multiple argumetns into a sequence of functions that each takes multiple arguments 
//into a swquence of functions that each takes 1 argument.filter.com