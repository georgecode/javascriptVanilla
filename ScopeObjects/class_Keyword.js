// class
// _private (not real just a convention everyone uses)
// constructor
// extends

class Mammal{
	//constructor is how you add your properties to a class
	constructor(sound, _ssNumber){
		this.sound = sound
		//the under score  0n _ssNumber means it's private and do not change it
		//but in reality there is no private class in javascript it's 
		//just a convention developers use 
		this._ssNumber = _ssNumber
	}

	talk(){
		return this.sound
	}

	
}

//extends is how we assign the class we want to inherat from
class Dog extends Mammal{
	constructor(){
		//super calls the constructor of the inhearted class the one
		//we assigned with "extends" ... in this example it calls the constructor
		//of the Mammal class
		super("wwwwwooooooofffff!!!!!!!", 123456)
	}

}




let fluffy = new Dog()

console.log(fluffy)//Dog { sound: 'wwwwwooooooofffff!!!!!!!', _ssNumber: 123456 }

let x = fluffy.talk()
console.log(x)//wwwwwooooooofffff!!!!!!!



