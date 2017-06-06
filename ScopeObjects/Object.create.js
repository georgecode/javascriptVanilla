// Object.create
// init
// chaining functions


//This is an object literal
const cat ={
	init:function(sound, age){
		this.sound = sound
		this.age = age
		//by returning this here it allows you to chain functions
		//like i did on line 48
		return this
	},

	makeSound: function(){
		console.log(this.sound)
	},
	showAge: function(){
		console.log(this.age)
	}
}

//this is the old old way to do it
// //the function below creates a new object with the prototype set to a certain object
// //proto is short for prototype
// function objectCreate(proto){
// 	const obj ={}
// 	//this sets the prototype of our object to proto
// 	Object.setPrototypeOf(obj, proto)
// 	return obj

// }




const mark = Object.create(cat)
mark.init("meowFFF", 3)//meowFFF
mark.makeSound()
mark.showAge()

const waffles = Object.create(cat)
waffles.init("Mrooor")//Mrooor
waffles.makeSound()

//This is the example of function chaining only works because we returned this on init:function
const bob = Object.create(cat).init("HELLOwwwww")
bob.makeSound()//HELLOwwwww

//the cat is a prototype of mark
//mark is not a prototype of a cat
console.log('Is mark a cat?', cat.isPrototypeOf(mark))//Is mark a cat? true





