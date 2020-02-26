// For more info on max, see the README.md or underscore docs

//This is the iteratee function
let maxValue = function(individualList) {
  return individualList.age;
}
var max = function(list, maxValue) {
  let newObj = {};
  if(list.length === 0) {
    return -Math.min();
  }
  if(arguments.length > 1) {
    let firstIndividualList = maxValue(list[0]);
    for(let i = 1; i < list.length; i++) {
      newObj = {};
      if(maxValue(list[i]) > firstIndividualList ) {
        firstIndividualList =  maxValue(list[i]);
        newObj = list[i];
      }
    }
  } else {
    let firstIndividualList1 = list[0].age;
    for(let i = 1; i < list.length; i++) {
      newObj = {};
      if(list[i].age > firstIndividualList1) {
        firstIndividualList1 = list[i].age;
        newObj = list[i];
      }
    }
  }
  //return JSON.stringify(arr);
  return newObj;
}

var stooges = [{name: 'moe', age: 40}, {name: 'larry', age: 50}, {name: 'curly', age: 60}];
console.log(max(stooges)); //{name: 'curly', age: 60}
//console.log(max(stooges));
//var value = {name: 'moe', age: 40};
//console.log(maxValue(value));
