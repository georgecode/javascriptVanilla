//.filter
//It returns only what you ask for
// a true or false value

var animals = [
{ name:'spark', type:'dog' },
{ name:'garfeild', type:'cat' },
{ name:'lassy', type:'dog' },
{ name:'ed', type:'horse' },
{ name:'jack', type:'dog' },
{ name:'bella', type:'rabbit' },
{ name:'cobra', type:'snake' }
]


//useing a loop
// var dogs = []

// for(var i=0; i < animals.length; i++){
// 	if(animals[i].type === 'dog'){
// 		dogs.push(animals[i])
// 	}
// }

// console.log(dogs);


//es5 .filter
var dogs5 = animals.filter(function(animal){
	return animal.type === 'dog'
});

//es6 .filter
let dogs6 = animals.filter(animal => animal.type === 'dog')

console.log(dogs5)
console.log(dogs6)
// [ { name: 'spark', type: 'dog' },
//   { name: 'lassy', type: 'dog' },
//   { name: 'jack', type: 'dog' } ]