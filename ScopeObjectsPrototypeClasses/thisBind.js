function talk(){
	console.log(this.sound)
}

let dog ={
	//Adding the speak:talk property to the dog object gives the object access to the function
	//speak is the property... talk is the property value
	speak:talk,
	sound:'bark'
}

talk()//undefined  //because talk dosent know what this is
dog.speak()//bark



//For the below code to work we have to bind dog to talk
//before we create the variable talkingDog
dog.speak = talk.bind(dog)

let talkingDog = dog.speak

talkingDog()//bark

/////////

let cat ={
	speak:talk,
	sound:'meow',
	//this is a terriable thing to do but just adding it to see how bind works 
	//this only works because we bound dog.speak to dog on line 19
	//If we did not bind it, the this in the talk function would refer to the cat object
	//and it would meow
	catDog:dog.speak
}

cat.speak()//meow
cat.catDog()//bark