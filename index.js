// rest example
console.clear();
let arr = ['Amber', 'Chetan', 'Vikalp', 'rishabh'];
[a,b,...rest] = arr
console.log(a, b, ...arr);
console.log(a, b,...rest);
console.log(arr)

//Normal Function
function abc(){
  console.log("hello")
}
abc()

// arrow function
xyz = ()=>{
  console.log('hello arrow')
}
xyz()

// arrow with no parameter and paranthesis
// applicable for single output and input

xyz = _=> console.log('hello arrow')
xyz()