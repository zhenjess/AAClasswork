Array.prototype.uniq = function() {
  let newArr = [];

  for (let i = 0; i < this.length; i++) {

    if (newArr.includes(this[i])) {
      // do nothing
    } else {
      newArr.push(this[i]);
    }
  }

  return newArr;
};

console.log([1,2,2,3,3,3].uniq());

Array.prototype.twoSum = function() {
  let pairs = [];

  for (let i = 0; i < this.length; i++) {
    for (let j = i + 1; j < this.length - 1; j++) {
      if ((this[i] + this[j]) == 0) {
        pairs.push([i, j]);
      }
    }
  }

  return pairs;
};

console.log([3, 4, -3, -4, 8, 11].twoSum());

Array.prototype.transpose = function() {
  let pairs = [];

  for (let i = 0; i < this.length; i++) {
    pairs.push([]);
  };

  for (let i = 0; i < this.length; i++) {
    for (let j = 0; j < this.length; j++) {
      pairs[j].push(this[i][j]);
    };
  };



  return pairs;
};

console.log([[3, 4], [-3, -4], [8, 11]].transpose());

// Array.prototype.twoSum = function () {
//   let pairs = [];

//   this.forEach(function (ele1, idx1) {
//     this.forEach(function (ele2, idx2) {
//       if ((ele1 + ele2) == 0 && (idx1 < idx2)) {
//         pairs.push([idx1, idx2]);
//       }
//     });
//   });

//   return pairs;
// };

// console.log(twoSum([3, 4, -3, -4, 8, 11]));
