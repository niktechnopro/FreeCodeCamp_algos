// Flattening an array is a process of reducing the dimensionality of an array. 

//option 1 - recursive solution
function steamrollArray(arr) {
    let temp = [];
    const flattenSimpleArray = (el) => {
        // console.log("here: ", el)
        if(Array.isArray(el)){//if array
            for(let i = 0; i < el.length; i++){
                if(Array.isArray(el[i])){
                    flattenSimpleArray(el[i]);
                }
                else{
                    temp.push(el[i]);
                }
            }
        }
        else{//if not an array
            temp.push(el);
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