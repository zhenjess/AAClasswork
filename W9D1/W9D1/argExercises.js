// function sum(args) {
//   let sum = 0;
//   for (let i = 0; i < arguments.length; i++) {
//     sum += arguments[i];
//   }
//   return sum;
// }
// // console.log(sum(1, 2, 3, 4));

// function restSum(...args){
//   let sum = 0;
//   args.forEach((arg)=>{
//     sum += arg;
//   });
//   return sum;
// }
// // console.log(restSum(1, 2, 3, 4));

// // Rewrite your myBind method so that it can take both bind 
// // - time arguments and call - time arguments.

// class Cat {
//   constructor(name) {
//     this.name = name;
//   }

//   says(sound, person) {
//     console.log(`${this.name} says ${sound} to ${person}!`);
//     return true;
//   }
// }

// class Dog {
//   constructor(name) {
//     this.name = name;
//   }
// }

// const sennacy = new Cat("sennacy");
// const rover = new Dog("rover");


// Function.prototype.myBind = function(context){
//   const bindArgs = Array.from(arguments).slice(1);
//   let that = this; //to keep .says in Function
//   return function() { //returns new function after bind
//     const otherArgs = Array.from(arguments);
//     return that.apply(context, bindArgs.concat(otherArgs)); //returns result of invoking function
//     don't do .call since passes in each arg individually, so
 //   .apply for this array bindArgs.concat(otherArgs)
//.says.apply(rover, ["meow", "sennacy"])
//  };
// };

// // def.says(context, *args)
// Function.prototype.myBind = function(context, ...bindArgs) { //set up bind
//   //Function (.says) is bound to context (rover) 
//   let that = this; //this is Function, capturing the original Function with "that"
//   return function (...otherArgs) { //call original function (rover.says)
//     return that.apply(context, bindArgs.concat(otherArgs)); //apply takes in a context and a single array
//     //that.call(context, ["meow", "tree"])
//   };
// };

// sennacy.says("meow", "Ned");
// // sennacy says meow to Ned!
// // true

// // bind time args are "meow" and "Kush", no call time args
// sennacy.says.myBind(rover, "meow", "Kush")();
// // rover says meow to Kush!
// // true

// // no bind time args (other than context), call time args are "meow" and "a tree"
// sennacy.says.myBind(rover)("meow", "a tree");
// // rover says meow to a tree!
// // true

// // bind time arg is "meow", call time arg is "sennacy"
// sennacy.says.myBind(rover, "meow")("sennacy");
// //sennacy.says.mybind(context, ...bindArgs)(...otherArgs)
// // rover says meow to sennacy!
// // true

// // no bind time args (other than context), call time args are "meow" and "me"
// const notsennacySays = sennacy.says.myBind(rover);
// notsennacySays("meow", "me");
// // rover says meow to me!
// // true


// function productThree(num1, num2, num3) { //curry: don't run function until you have the identified amount of arguments
//   return num1 * num2 * num3;
// }


// console.log(productThree(4, 5, 5)); // === 100

// // // you'll write `Function#curry`!
// // let f1 = productThree.curry(3); // tells `f1` to wait until 3 arguments are given before running `sumThree`
// // f1 = f1(4); // [Function]
// // f1 = f1(20); // [Function]
// // f1 = f1(6); // = 30

// // // or more briefly:
// // console.log(productThree.curry(3)(4)(20)(6)); // == 30)

// function curriedSum(numArgs) {
//   let numbers = [];
//   let _curriedSum = function(num) {
//     numbers.push(num);
//     if(numbers.length === numArgs) {
//       let sum = 0;
//       for (let i = 0; i < numbers.length; i++) {
//         sum += numbers[i];
//       }
//       return sum;
//     } else {
//       return _curriedSum;
//     }
//   };
//   return _curriedSum;
// }

// const sum = curriedSum(4);
// total = sum(5)(30)(20)(1); // => 56
// console.log(total);
// const sum2 = sum(5);
// // console.log(sum2);
// const sum3 = sum2(30);
// // console.log(sum3);
// const sum4 = sum3(20);
// // console.log(sum4);
// const sum5 = sum4(1);
// console.log(sum5);


// default curry function
Function.prototype.curry() = function(numArgs) {
  let args = [];
  _curriedFnc = function(arg){
    args.push(arg);
    if(numArgs !== args.length){
      return _curriedFnc;
    } else {
      return this.apply(args);  
    }
  };
  return _curriedFnc;
};



// rest operator function
Function.prototype.curry() = function(numArgs) {
  let args = [];
  _curriedFnc = function(arg){
    args.push(arg);
    if(numArgs !== args.length){
      return _curriedFnc;
    } else {
      for (let i = 0; i < args.length; i++) {
        this(args[i]);
      }
      return this;  
    }
  };
  return _curriedFnc;
};



// Function.prototype.apply curry function
// Function.prototype.curry(numArgs) = function(numArgs) {
//   let args = [];
//   _curriedFnc = function(arg){
//     args.push(arg);
//     if(numArgs !== args.length){
//       return _curriedFnc;
//     } else {
//       return this.apply(args);  
//     }
//   };
//   return _curriedFnc;
// };




