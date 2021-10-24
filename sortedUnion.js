//option 1
function uniteUnique(arr) {
  let mySet = new Set();
  for(let el of arguments){
    for(let num of el){
      mySet.add(num);
    }
  }
  arr = Array.from(mySet);//do not declare as it's a function parameter
  return arr;
}
uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);


//option 2
function uniteUnique(arr) {
  let newArray = [];
  for(let array of arguments){
    newArray = [...newArray, ...array];
  }
  arr = [];
  for(let el of newArray){
    if(!arr.includes(el)){
      arr.push(el);
    }
  }
  return arr;
}
uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);


//explanation about arguments object in every function;
// https://www.youtube.com/watch?v=KU3268tfflc