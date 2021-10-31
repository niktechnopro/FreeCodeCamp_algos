function sumPrimes(num) {
  function isPrime(number){
    if (number <=1 ) return false;
    for (let k = 2; k < number; k++) {
      if (number % k === 0) return false;
    }
    return true;
  }

  // option 1
  // let i = 0, sum = 0;
  // while(i < num){
  //   ++i;//interesting - supposedly more efficient
  //   if(isPrime(i)){
  //     sum += i;
  //   }
  // }

  // option 2
  let i = 0, sum = 0, arrayOfNums = [];
  while(i < num){
    ++i;//interesting - supposedly more efficient
    arrayOfNums.push(i);
  }

  for(let element of arrayOfNums){
    if(isPrime(element)){
      sum += element;
    }
  }

  return sum;
}

sumPrimes(10);
