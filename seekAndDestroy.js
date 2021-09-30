function destroyer(arr, ...toRemove) {
  //every function has an Object arguments
  // const arguments = {
  //   "0": "first parameter",
  //   "1": "second parameter",
  //   "2": "third parameter",
  //   etc...
  // }

  //option 1
  // const toRemove = Object.values(arguments).slice(1);
  // return arr.filter(value => !toRemove.includes(value));

  //option 2
  return arr.filter(value => !toRemove.includes(value));
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);