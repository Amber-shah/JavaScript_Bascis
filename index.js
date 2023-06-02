//In regular function this keyword represent object that called fucntion
//before binding 
var obj = {
  id : 42,
  counter:function counter(){
    setTimeout(function(){
      console.log(this.id)
    },1000)
  }
}
obj.counter()
//how we are solving this before ES6
var obj = {
  id : 42,
  counter: function counter(){
    setTimeout(function(){
      console.log(this.id)
    }.bind(this,1000))
  }
}  
obj.counter()


// In arrow this keyword always represent object that defined the arrow func 
var obj1={
  num: 45,
  myArrow: function myAction(){
    setTimeout(()=>{
      console.log(this.num)
    },1000)
  }
}
obj1.myArrow()

//Spread Operator
//denoted as ...
// 4 types of SO :- Expanding string, array and Combinig array, Object

//EXPANDING STRING
let str = 'hello';
let arrStr = [...str];
console.log(str);
console.log(arrStr);

//Expanding ARRAY
let exp = ["hello","I","Am","learning","js"]
console.log(exp)
console.log(...exp)

//Combining Array
let arr1 = ["hello","I","Am","learning","js"]
let arr2 = ["for", "lwc"]
let arr3 = [...arr1,...arr2]
console.log(arr3)

//Combining object
var obj = {"name":"Amber",age:23}
var obj2 = {"name":"Shah",age:21}

var obj3 = {...obj,...obj2}
console.log(obj3)         //Overrides same attribute

obj2= {"name":"Shah",age:21,"gender":"male"}
var obj3 = {...obj,...obj2}
console.log(obj3)

obj2= {"Position":"SDE",package:800000,"gender":"male"}
var obj3 = {...obj,...obj2}
console.log(obj3)


//DESTRUCTURING
//It is used to unpack the object and array into bunch of variables, it sometimes more convient.
//TWO TYPES OF DESTRUCTURING :- 1.Object Des 2.Array Des

var option = {
  title:"I am object destructuring",
  types: 2,
  correct: true
}
let {title,types,correct} = option // this part doing the actual destructuing. if you will hide this then lower part will not work

console.log(title,types,correct)

//ARRAY DESTRUCTUIRING

let lstarr = ["Salesforce", "is", "worlds", "best CRM"]

let [firstname, secondname, thirdone, kuchbhi] = lstarr

console.log(firstname,secondname,thirdone, kuchbhi)












