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
