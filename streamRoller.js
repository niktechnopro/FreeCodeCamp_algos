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
        return temp;
    }
    for(let el of arr){
        flattenSimpleArray(el);
    }
    return temp;
}
  
steamrollArray([1, [2], [3, [[4]]]]);