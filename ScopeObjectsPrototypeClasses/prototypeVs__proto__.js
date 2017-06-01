//prototypes inheratince gives a bad mental picture 
//a better way to think is prototype deligation

let dog = {
	breed:'lab',
	color:"brown"
}

let myDog ={name:'kona'}


//this is how you tell an object to inheart the properties of another object
Object.setPrototypeOf(myDog, dog)

console.log("name:",myDog.name)//name: kona
console.log("breed:",myDog.breed)//breed: lab

// .__proto__ is how you see all the prototypes the object inherates
console.log(myDog.__proto__)//{ breed: 'lab', color: 'brown' }
console.log(dog.prototype)//undefined

dog.tailLength =15

console.log(myDog.__proto__)//{ breed: 'lab', color: 'brown', tailLength: 15 }
console.log(myDog.tailLength)//15


// .prototype is only used to add a prototype to a function

function animal(sound){
	this.sound = sound
}

// .prototype is only used to add a prototype to a function
animal.prototype.alive = "I am alive"

var myCat = new animal("meow")

console.log(myCat)//animal { sound: 'meow' }
console.log(myCat.__proto__)//animal { alive: 'I am alive' }