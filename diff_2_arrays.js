//diff 2 arrays
function diffArray(arr1, arr2) {
  var newArr = [];

  //option 1
  for(let el of arr1){
    if(!arr2.includes(el)){
      newArr.push(el);
    }
  }

  for(let el of arr2){
    if(!arr1.includes(el)){
      newArr.push(el);
    }
  }


  //option 2
  // let a = arr1.filter(x => !arr2.includes(x));
  // let b = arr2.filter(x => !arr1.includes(x));
  // newArr = [...a, ...b];
  
  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);

// diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4]);