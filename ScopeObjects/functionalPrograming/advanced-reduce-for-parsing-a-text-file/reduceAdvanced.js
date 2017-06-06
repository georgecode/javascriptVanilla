//https://www.youtube.com/watch?v=1DMolJ2FrNY&list=PL0zVEGEvSaeEd9hlmCXrk5yUyqUag-n84&index=4

// How to install babel
//$ npm init
//$ npm install --save-dev babel-cli
//$ npm install babel-preset-es2015
// update .babelrc file

// How to run it
//$ babel fileName.js | node


import fs from 'fs'

// var fs = require('fs')

var output = fs.readFileSync('data.txt', 'utf8')
	//Cuts the extra shit off the end
	.trim()

	//splits at each new line
	.split('\n')

	//this splits each line at the tab space and turns it into an array
	// \t means tab charcter but can also be used for commas in an array
	.map(line => line.split('\t'))

	//in this example customers is the basket you put shit in
	//and line is what each iteration returns
	.reduce((customers,line)=>{

		//in each line [0]is the name so the cobe below will
		//assign an empty array as the value to each name key
		//if there is a repeat in the name key it will just be over written
		//so this will make only one key for each unique name
		// customers[line[0]] = []
		//this would return { 'mark johansson': [], 'Nikita Smith': [] } 


		//this is how you reuse a name value if one already exists 
		//if a name value does not already exist it will assign it an empty array
		//to the unique name value
		//think of it as sayin customers.name = coustomers.name
		customers[line[0]] = customers[line[0]] || []
		
		// think of this as coustomers.name.push()
		//we are pushing this object to the name's array
		customers[line[0]].push({
			name: line[1],
			price: line[2],
			quantity: line[3]
		})
		return customers
	}, {})//end reduce

	// //this will console.log the output
	console.log(output)

	//this will console.log the output but it will look like json
	//the null just works and by adding the argument 2 we are
	//telling it to display with 2 spaces as indentation
	console.log(JSON.stringify(output, null, 2))	
























