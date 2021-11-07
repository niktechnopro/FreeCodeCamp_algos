// find smallest multiple - the smallest number that is evenly divisible by given range of numbers.

function smallestCommons(arr) {
    // let max = Math.max(arr[0], arr[1]);
    // let min = Math.min(arr[0], arr[1]);
    //or
    arr.sort((a,b) => a -b);
    const min = arr[0];
    const max = arr[1];
    let commonMultiple = max;
    console.log(min, max)
    //sort of brute force
    for(let i = max; i >= min; i--){//starting from the highest number
      if(commonMultiple % i !== 0){//if multiple devides on any element in array with remainder (% - module operator)
        commonMultiple += max; 
        i = max;//reset iteration
      }
    }
  
    return commonMultiple;  
}
  
// smallestCommons([1,5]);
smallestCommons([23, 18]);// should return 6056820
  