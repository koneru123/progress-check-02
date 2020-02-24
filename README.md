# HREXT Progress Check 2

## Disallowed Resources
- [ ] Previous work of any kind (yours, others', notes, blog posts...)
- [ ] Repl.it/codeshare
- [ ] NO SLACK CHAT. Do not chat with others while doing the assessment
- [ ] HD is not open for anything but logistics (forking/cloning/pushing)

## Allowed Resources
- [MDN](https://developer.mozilla.org/en-US/)
- [underscore](https://underscorejs.org/#max)

## max
`max(list, [iteratee])`

Returns the maximum value in list. If an iteratee function is provided, it will be used on each value to generate the criterion by which the value is ranked. -Infinity is returned if list is empty. Non-numerical values in list will be ignored.

```javascript
var stooges = [{name: 'moe', age: 40}, {name: 'larry', age: 50}, {name: 'curly', age: 60}];
max(stooges, function(stooge){ return stooge.age; });
=> {name: 'curly', age: 60};
```

## Instructions
- [ ] Fork and clone this repo
- [ ] Write  max in `index.js`, making commits with meaningful messages where appropriate
- [ ] Push your work to your fork
