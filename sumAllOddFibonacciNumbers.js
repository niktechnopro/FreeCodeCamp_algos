// option 1 - 2 loops
function sumFibs(num) {
  //first 2 numbers 1,1
  let holder = [1,1];
  let idx = 0;
  while((holder[idx] + holder[idx+1]) <= num){
    holder.push(holder[idx] + holder[idx+1]);
    idx += 1;
  }
  let sum = 0;
  for(let element of holder){
    if(element % 2 !== 0){
      sum += element;
    }
  }
  return sum;
}

// option 2 - 1 loop
// function sumFibs(num) {
//   //first 2 numbers 1,1
//   let holder = [1,1];
//   let idx = 0, i = 0, sum = 2;
//   while((holder[idx] + holder[idx+1]) <= num){
//     i = holder[idx] + holder[idx+1];
//     holder.push(i);
//     if(i % 2 !== 0){
//       sum += i;
//     }
//     idx += 1;
//   }
//   return sum;
// }

sumFibs(4);
