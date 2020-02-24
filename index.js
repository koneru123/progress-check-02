// For more info on max, see the README.md or underscore docs

//This is the iteratee function
let maxValue = function(individualList) {
  return individualList.age;
}

var max = function(list, maxValue) {
  let arr = [];
  let firstIndividualList = maxValue(list[0]);
  for(let i = 1; i < list.length; i++) {
    arr = [];
    if(maxValue(list[i]) > firstIndividualList ) {
      firstIndividualList =  maxValue(list[i]);
      arr.push(list[i]);
    }
  }
  //return JSON.stringify(arr);
  return arr;
}

var stooges = [{name: 'moe', age: 40}, {name: 'larry', age: 50}, {name: 'curly', age: 60}];
console.log(max(stooges, function(stooge){ return stooge.age; })); //{name: 'curly', age: 60}
//var value = {name: 'moe', age: 40};
//console.log(maxValue(value));
