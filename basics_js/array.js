// array

const myArr = [0,1,2,3,5,]
const myCars = ["BMW","Audi"]

const myArr2 = new Array(1,2,3,4)
console.log(myArr[1]);

// Array methods

myArr.push(6,9)
console.log(myArr);
myArr.pop();
console.log(myArr);

myArr.unshift(9) //push element in array
console.log(myArr);

myArr.shift() //pops the elemnet in the array 

console.log(myArr.includes(9));
console.log(myArr.indexOf(2));

const newArr = myArr.join()

console.log(myArr);
console.log(typeof newArr);

// slice , splice 
console.log("A", myArr );

const myn1 = myArr.slice(1,3)
console.log(myn1);

console.log("b", myArr);

const myn2 = myArr.splice(1, 3)
console.log("C",myArr);
console.log(myn2);
















