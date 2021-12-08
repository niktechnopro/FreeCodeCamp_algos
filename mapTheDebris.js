function orbitalPeriod(arr) {
  const GM = 398600.4418;
  const earthRadius = 6367.4447;
  let T = null;
  //option 1
  const newArray = [];
  //formula - T = 2*Math.PI * Math.sqrt(Math.pow(avgAlt + earthRadius, 3)/GM);
  for (let elem of arr) {
    T = 2*Math.PI * Math.sqrt(Math.pow(elem.avgAlt + earthRadius, 3)/GM);
    newArray.push({name: elem.name, orbitalPeriod: Math.round(T)});
  }
  return newArray;

  //option 2
  // return arr.map((elem, idx) => {
  //   T = 2*Math.PI * Math.sqrt(Math.pow(elem.avgAlt + earthRadius, 3)/GM);
  //   return {name: elem.name, orbitalPeriod: Math.round(T)};
  // })

}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);

// orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]) should return [{name: "sputnik", orbitalPeriod: 86400}]
// orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}]) should return [{name : "iss", orbitalPeriod: 5557}, {name: "hubble", orbitalPeriod: 5734}, {name: "moon", orbitalPeriod: 2377399}]