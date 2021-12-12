// Functions in JavaScript are 'first class', which means they are treated like any other variable
//  — including being passed to 
// or returned from other functions.
function dropElements(arr, func) {
    let idx=0;
    for(idx=0; idx < arr.length; idx++){
        if(func(arr[idx])){
        break;
        }
    }
    return arr.slice(idx);
}

dropElements([1, 2, 3], function(n) {return n < 3; });//function returns true/false