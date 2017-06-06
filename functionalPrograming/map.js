//.map
//it loops through an array and returns what you asked for 

var animals = [
{ name:'spark', type:'dog' },
{ name:'garfeild', type:'cat' },
{ name:'lassy', type:'dog' },
{ name:'ed', type:'horse' },
{ name:'jack', type:'dog' },
{ name:'bella', type:'rabbit' },
{ name:'cobra', type:'snake' }
]

// //for loop
// var names = []
// for (var i = 0; i < animals.length; i++) {
// 	names.push(animals[i].name)
// }

//es5                 // vvvvv - THIS IS THE CALL BACK FUNCTION
var names5 = animals.map(function(animal){
	return animal.name
})

//es6					// vvvvv - THIS IS THE CALL BACK FUNCTION
var names6 = animals.map(animal => animal.name)

console.log(names5)
console.log(names6)

