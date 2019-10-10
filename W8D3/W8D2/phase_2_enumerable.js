const NUMS = [1, 2, 3, 4, 5];

Array.prototype.myEach = function(func) {
  for (let i = 0; i < this.length; i++) {
    func(this[i]);
  }
}

NUMS.myEach((num) => {
  console.log(num);
});

Array.prototype.myMap = function(func) {
  const mappedArray = [];

  this.myEach(element => mappedArray.push(func(element)) );

  // this.myEach(function(element) {
  //   mappedArray.push(element);
  // });

  return mappedArray;
}

console.log(NUMS.myMap(num => num));

Array.prototype.myReduce = function(func, initialValue) {
  let arr = this;

  if (initialValue == undefined) {
    initialValue = this[0];
    arr = arr.slice(1);
  };

  let result = initialValue;

  arr.myEach(element => result = func(result, element));

  return result;
}

console.log(NUMS.myReduce( (total, item) => total + item) );