function destroyer(arr, ...args) {
  //option 1
  // const toRemove = Object.values(arguments).slice(1);
  // return arr.filter(value => !toRemove.includes(value));

  //option 2
  return arr.filter(value => !args.includes(value));
}

// ... in arguments field - is a rest operator - collects all the elements into the array

destroyer([1, 2, 3, 1, 2, 3], 2, 3);

// { '0': [ 1, 2, 3, 1, 2, 3 ], '1': 2, '2': 3 }

// let destroyed = [];
// for(let el of arr){
//   if(!toRemove.includes(el)){
//     destroyed.push(el);
//   }
// }
// return destroyed;
// console.log(arguments)

//every function has Object called arguments
// arguments = {
//   "0": "first parameter",
//   "1": "second parameter",
//   "2": "third parameter",
//   etc...
// }