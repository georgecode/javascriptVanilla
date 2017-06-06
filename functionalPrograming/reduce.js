// .reduce basic

var orders =[
  { amount: 250 },
  { amount: 400 },
  { amount: 100 },
  { amount: 325 }
]


//for loop
var totalAmount = 0
for (var i = 0; i<orders.length; i++){
	totalAmount += orders[i].amount
}

console.log(totalAmount)

//es5
var totalAmount5 = orders.reduce(function(xsum, xorder){
 return xsum + xorder.amount
}, 0)// the 0 is a starting point for xsum 
//reduce requires a starting point


//es6
var totalAmount6 = orders.reduce((xsum, xorder)=>
  xsum + xorder.amount
, 0)// the 0 is a starting point for xsum, reduce requires a starting point



console.log(totalAmount5)
console.log(totalAmount6)