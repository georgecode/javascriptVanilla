//.setPrototypeOf
// in real life this is slow as shit and you should never use it 

function talk(){
	
	console.log(this.sound)
}

let animal ={
	talk:talk
}

animal.talk()//undefined

//This is the es6way you only need to add the property it knows the value

// let animal ={
// 	talk
// }

let cat ={
	sound:'meow!'
}

//this is where we set the cat prototype to animal
//this basicially means javascript will look for a property
//in the cat object first but if it dosent have one it will go
//up the chain to the animal object
Object.setPrototypeOf(cat, animal)

cat.talk()//meow!