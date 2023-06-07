//In regular function this keyword represent object that called fucntion
//before binding
var obj = {
  id: 42,
  counter: function counter() {
    setTimeout(function () {
      console.log(this.id);
    }, 1000);
  },
};
obj.counter();
//how we are solving this before ES6
var obj = {
  id: 42,
  counter: function counter() {
    setTimeout(
      function () {
        console.log(this.id);
      }.bind(this, 1000)
    );
  },
};
obj.counter();

// In arrow this keyword always represent object that defined the arrow func
var obj1 = {
  num: 45,
  myArrow: function myAction() {
    setTimeout(() => {
      console.log(this.num);
    }, 1000);
  },
};
obj1.myArrow();

//Spread Operator
//denoted as ...
// 4 types of SO :- Expanding string, array and Combinig array, Object

//EXPANDING STRING
let str = 'hello';
let arrStr = [...str];
console.log(str);
console.log(arrStr);

//Expanding ARRAY
let exp = ['hello', 'I', 'Am', 'learning', 'js'];
console.log(exp);
console.log(...exp);

//Combining Array
let arr1 = ['hello', 'I', 'Am', 'learning', 'js'];
let arr2 = ['for', 'lwc'];
let arr3 = [...arr1, ...arr2];
console.log(arr3);

//Combining object
var obj = { name: 'Amber', age: 23 };
var obj2 = { name: 'Shah', age: 21 };

var obj3 = { ...obj, ...obj2 };
console.log(obj3); //Overrides same attribute

obj2 = { name: 'Shah', age: 21, gender: 'male' };
var obj3 = { ...obj, ...obj2 };
console.log(obj3);

obj2 = { Position: 'SDE', package: 800000, gender: 'male' };
var obj3 = { ...obj, ...obj2 };
console.log(obj3);

//DESTRUCTURING
//It is used to unpack the object and array into bunch of variables, it sometimes more convient.
//TWO TYPES OF DESTRUCTURING :- 1.Object Des 2.Array Des

var option = {
  title: 'I am object destructuring',
  types: 2,
  correct: true,
};
let { title, types, correct } = option; // this part doing the actual destructuing. if you will hide this then lower part will not work

console.log(title, types, correct);

//ARRAY DESTRUCTUIRING

let lstarr = ['Salesforce', 'is', 'worlds', 'best CRM'];

let [firstname, secondname, thirdone, kuchbhi] = lstarr;

console.log(firstname, secondname, thirdone, kuchbhi);

//STRING INTERPOLATION
// It is used to insert/embedd expression into string like variables, expression, mathmatical expression and perform calculation

var name = 'salesforce LWC';
console.log(`hello ${name}`);

var a1 = 10,
  b1 = 20;
console.log(`the addition ${a1} and ${b1} is ${a1 + b1}`);

//fetch API
//I have fetched github Api of my account which fetch my details
//Note :- You have mention the api explicitly

async function getUser() {
  let promise = await fetch(`https://api.github.com/users/Amber-shah`);
  let data = await promise.json();
  console.log(data);
}
getUser();

//ARRAY METHODS
let details = [
  { name: 'salesforce', release: 22 },
  { name: 'salesCloud', release: 23 },
  { name: 'salesforce', release: 18 },
];
let arr = [];
details.forEach((item) => {
  if (item.release > 18) {
    arr.push(item);
  }
});
console.log(arr);

//BY USING SEPARATOR
let details1 = [
  { name: 'salesforce', release: 22 },
  { name: 'salesCloud', release: 23 },
  { name: 'salesforce', release: 18 },
];
let arrNew = [];
details1.forEach((item) => {
  if (item.release < 20) {
    arrNew = [{ ...item }];
  }
});
console.log(arrNew);

//MAP METHODS
let newDetails = [
  { name: 'salesforce', release: 22 },
  { name: 'salesCloud', release: 23 },
  { name: 'salesforce', release: 18 },
];
let temp = newDetails.map(item=>{
  return item.release > 18 ? {...item,"name":"new name" ,"release":24} : {...item}
})
console.log(temp)
console.log(newDetails)

//Include method in JS
let includeArr = ["JavaScript", "Java", "C", "Python"]

console.log(includeArr.includes("aloo"))
console.log(includeArr.includes("Java"))
console.log(includeArr.includes("java"))
console.log(includeArr.includes("JavaScript",-4))

let text = "Hello world, welcome to the universe.";
let result = text.includes("world");
let result2 = text.includes("world",6);
let result3 = text.includes("world",7);
let result5 = text.includes("uni",-8);

console.log(result)
console.log(result2)
console.log(result3)
console.log(result5)

//FIND INDEX OF STRING
let strArr = "JavaScript Java C Python"
console.log(includeArr.indexOf("Java"))
console.log(strArr.indexOf("c"));
console.log(strArr.indexOf("J"));
console.log(strArr.indexOf("J",2));

//FIND INDEX OF INTEGER
let num = [9, 15, 2, 4, 1, 78, 3, 6, 7, 8]
let arrwFunc= num=>{
  return num > 9;
}
console.log(num.findIndex(arrwFunc)) // return 1 as index of 15

//Splice method
console.log(num.splice(8,2)) //[7, 8]
console.log(num)  //[9, 15, 2, 4, 1, 78, 3, 6]



