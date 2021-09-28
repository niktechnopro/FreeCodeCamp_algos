
//solution one
// function sumAll(arr){
//   //sort it so the lowest number will be first
//   let sorted = arr.sort((a,b)=>a-b);
//   let sum = 0;
//   for(let i = sorted[0]; i <= sorted[1]; i++){
//     sum+=i;
//   }
//   return sum;
// }

//solution two
function sumAll(arr){
    //sort it so the lowest number will be first
    let sorted = arr.sort((a,b)=>a-b);
    let forFun = [];
    for(let i = sorted[0]; i <= sorted[1]; i++){
      forFun.push(i);
    }
    return forFun.reduce((accumulator, next) => {
      return accumulator += next;
    });
  }
  
  
  sumAll([5,10]);