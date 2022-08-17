//how to compare two JSON have the same properties without order

//false
var obj1={ name:"Person 1" , age:5};
var obj2={age:5 ,name:"Person 1"};
console.log(JSON.stringify(obj1)==JSON.stringify(obj2));

var obj3 ={name:"Person 2" , age:15};
var obj4 ={age:15 , name:"Person 2"};
console.log(JSON.stringify(obj3)==JSON.stringify(obj4));

//true
var obj5={name:"Person 3" , age:30};
var obj6={age:30 , name:"Person 3"};
console.log(JSON.stringify(obj5)===JSON.stringify(obj6))
