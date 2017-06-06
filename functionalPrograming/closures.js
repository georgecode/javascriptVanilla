//closure just means java script has access to the entire 
//scope of the file

// the greetMe function has access to the me variable
// it does not just take a snap shot of the variable 
// it actually reades it on exicution

let me ="George"

function greetMe(){
	console.log("Hello",me+ "!")
}

greetMe()//Hello George!

me = "bob"

greetMe()//Hello bob!