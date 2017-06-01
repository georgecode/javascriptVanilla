// new (key word)
// object constructor (example)
// arguments (key word)
// .prototype
// .apply




//this is how a class works behind the scenes in es 6 THESE EXAMPLES ARE THE OLDSCHOOL WAY

//This is an object constructor
function Person(saying){
	this.saying = saying
}


//useing a prototype is equivelent to adding a ??property??? to a class  
//every function you create has a "prototype" property you can add shit to by default 
Person.prototype.talk = function(){
	//useing a , in a string will add a space useing a + will not
	console.log("I say", this.saying + "!!!")
}

var george = new Person('Im falling in love with javascript')

george.talk()//I say Im falling in love with javascript!!!

////////////////////////////////////////////////
console.log('\n--------------------\n')
///////////////////////////////////////////


//THIS IS HOW the new keyword works behind the scenes i'm remaking it as function xnew()

//This is an object constructor
function Xperson(saying){
	this.saying = saying
}


//useing a prototype is equivelent to adding a ??property??? to a class  
//every function you create has a "prototype" property you can add shit to by default 
Xperson.prototype.talk = function(){
	
	console.log("I say :", this.saying)
}

//this is basically what the new keyword does in 4 steps
function xnew(thexPersonConstructor){
	//1. create a new object
	var xobject ={}
	//2. Set the prototype
	Object.setPrototypeOf(xobject, thexPersonConstructor.prototype)

	//"arguments" key word returns the arguments you've added within a function
	console.log(arguments)//{ '0': [Function: Xperson], '1': 'I love dogs' }

	//This turns arguments into an array and gives you access to the slice prototype
	var argsArray =Array.prototype.slice.apply(arguments)
	console.log(argsArray)//[ [Function: Xperson], 'I love dogs' ]

	console.log(argsArray.slice(1))//[ 'I love dogs' ]
	
	//3. execute constructor with "this" keyword (in this example the constructor is Xperson)
	//apply is similar to bind but it executs the function immediately
	//apply's first argument is the object you want to set as this (in this example it's xobj)
	//apply's second argument is an array of the arguments you want to use in the function
	//thexPersonConstructor.apply(xobject,['I love dogs'])
	thexPersonConstructor.apply(xobject, argsArray.slice(1))
	//4. return the created object
	return xobject

}

var dana = xnew(Xperson, 'I love dogs')
var bob = xnew(Xperson, 'I love building')

dana.talk()
bob.talk()












