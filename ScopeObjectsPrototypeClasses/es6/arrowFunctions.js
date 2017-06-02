
//Basic function 

//es5
var func5 = function(){
	return "Es5 function"
};

//es6
let func6 = () => {return "ES6 function"};

console.log(func5())
console.log(func6())

/////////////////////////////////////////////////////////

//Basic function with ONE parameter 

//es5
var funcParam5 = function(name){
	return name.split("")
};

//es6
let funcParam6 = (name) => name.split("");

console.log(funcParam5('bob'))
console.log(funcParam6('mary'))






/////////////////////////////////////////////////////////

//Basic function with MORE THAN ONE parameters 

//es5
var funcParams5 = function(x,y){
	return x+y
};

//es6
let funcParams6 = (x,y) => {return x+y};

console.log(funcParams5(5,5))
console.log(funcParams6(5,5))

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


saysBark5({name:' kona'}).bark()
saysBark6({name:' bonus'}).bark()

/////////////////////////////////////////////////////////







