//https://www.sitepoint.com/es6-arrow-functions-new-fat-concise-syntax-javascript/

/////////////////////////////////////////////////////////
//Basic function 

//es5
var func5 = function(){
	return "Es5 function"
};

//es6
let func6 = () => {return "ES6 function"};

console.log(func5())//Es5 function
console.log(func6())//ES6 function




/////////////////////////////////////////////////////////

//Basic function with ONE parameter 

//es5
var funcParam5 = function(name){
	return name.split("")
};

//es6
let funcParam6 = (name) => name.split("");

console.log(funcParam5('bob'))//[ 'b', 'o', 'b' ]
console.log(funcParam6('mary'))//[ 'm', 'a', 'r', 'y' ]




/////////////////////////////////////////////////////////

//Basic function with MORE THAN ONE parameters 

//es5
var funcParams5 = function(x,y){
	return x+y
};

//es6
let funcParams6 = (x,y) => {return x+y};

console.log(funcParams5(5,5))//10
console.log(funcParams6(5,5))//10




/////////////////////////////////////////////////////////

//Object literal

//es5
const saysBark5 = function(state){
	return{
		bark:function(){
			console.log('Woff, I am' +state.name)
		}
	}
}

//es6
const saysBark6 = (state) =>({
	bark:()=> console.log('Woff, I am' +state.name)
	})


saysBark5({name:' kona'}).bark()//Woff, I am kona
saysBark6({name:' bonus'}).bark()//Woff, I am bonus




/////////////////////////////////////////////////////////

// .map

var smartPhones = [
	{ name:'iphone', price:649 },
	{ name:'Galaxy S6', price:576 },
	{ name:'Galaxy Note 5', price:489 }
];


//es5
console.log(smartPhones.map(
    function(smartPhone) {
	return smartPhone.price;
    }
));//[ 649, 576, 489 ]

//es6
console.log(smartPhones.map(
	smartPhone=>smartPhone.price
));//[ 649, 576, 489 ]




/////////////////////////////////////////////////////////

// .filter

var array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];

//es5
var odd5 = array.filter(function(num){
	return num % 2;
})


var odd6 = array.filter(num => num % 2);


console.log(odd5)//[ 1, 3, 5, 7, 9, 11, 13, 15 ]
console.log(odd6)//[ 1, 3, 5, 7, 9, 11, 13, 15 ]




/////////////////////////////////////////////////////////

// //Promises and Callbacks

// // ES5
// aAsync().then(function() {
// 	returnbAsync();
// }).then(function() {
// 	returncAsync();
// }).done(function() {
// 	finish();
// });

// // ES6
// aAsync().then(() => bAsync()).then(() => cAsync()).done(() => finish);
















