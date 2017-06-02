// Inheritance is when you design your types around what THEY ARE
// composition is when you design your types around what THEY DO

//object literal es6 way




//Old school way es5
// const barker = function(state){
// 	return{
// 		bark:function(){
// 			console.log('Woff, I am' +state.name)
// 		}
// 	}
// }

//es6 way
const barker = (state) =>({
	bark:()=> console.log('Woff, I am' +state.name)
	})


barker({name:' kona'}).bark()