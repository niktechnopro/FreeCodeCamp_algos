// Flattening an array is a process of reducing the dimensionality of an array. 

//option 1 - recursive solution
function steamrollArray(arr) {
    let temp = [];
    const flattenSimpleArray = (element) => {
        // console.log("here: ", el)
        if(Array.isArray(element)){//if array
            for(let i = 0; i < element.length; i++){
                if(Array.isArray(element[i])){
                    flattenSimpleArray(element[i]);
                }
                else{
                    temp.push(element[i]);
                }
            }
        }
        else{//if not an array
            temp.push(element);
        }
    }
    for(let el of arr){
        flattenSimpleArray(el);
    }
    return temp;
}


//option 2
function steamrollArray(arr) {
    const temp = [];
    // Loop over array contents
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        // Recursively flatten entries that are arrays and push into the temp
        temp.push(...steamrollArray(arr[i]));
      } else {
        // Copy contents that are not arrays
        temp.push(arr[i]);
      }
    }
    return temp;
}
  
steamrollArray([1, [2], [3, [[4]]]]);