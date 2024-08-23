// variable=10;

// (function(){
//     foo=10;
//     console.log(variable);
//     var foo=100;
//     variable=20;
// })()

// console.log(foo);
// console.log(variable);
// var variable=30

//Output: ReferenceError: foo is not defined
// Because foo is declared but inside the function
// And we cannot access it because it will destroy once the function the execution

// Next Question
for (var i = 0; i < 10; i++) {
  setTimeout(() => console.log(i), 0);
}

// Output:
// 10
// 10
// 10
// 10
// 10
// 10
// var is global variable and let is global variable var does not create new varible everytime

//Next Question

var fullName = "Asif Qureshi";

var obj = {
  fullName: "Asif",
  prop: {
    fullName: "Qureshi",
    fun1: function () {
      return this.fullName;
    },
  },
  fun2: function () {
    return this.fullName;
  },

  fun3: () => {
    return this.fullName;
  },
  fun4: (function () {
    return this.fullName;
  })(),
};

console.log(obj.prop.fun1());
console.log(obj.fun2());
console.log(obj.fun3());
console.log(obj.fun4);
//Output: 
// Qureshi
// Asif
// undefined
// undefined


//Next Question:

const Asif={
    name:"Asif",
    sayName: function(){
        console.log(this.name);
    },
};

const John={
    name:"John Deo",
    sayName:function(){
        console.log(this.name);
    }
}

John.sayName.call(Asif)

//Output: Asif because we are calling the function of John Deo and passing the object name to which sayName will this keyword will point 

//Next Question

const Random={
    name:"Random",
    sayName: function(){
        console.log(this.name);
    },
};

setTimeout(Random.sayName.bind(Random),3*1000)

//Output: Random

//Last Question

const obj1={
    height:30,
}

console.log(obj1.height);
delete obj1.height;
console.log(obj1.height);

