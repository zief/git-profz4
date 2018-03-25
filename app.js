// Problem: We need a simple to look at Github profile
// Solution: Use nodeJS to connect to Github API to 
// get profile info and print out the console

// TODO: [x] Connect to Github API
let https = require('https')

const options = {
	hostname: 'api.github.com',
	port: 443,
	path: '/users/zief',
	method: 'GET',
	headers: {
		'user-agent': 'nodejs'
	}
}

let request = https.request(options, (result) => {
	console.log('Got response: ', result.statusCode)
})

request.end()
request.on('error', (e) =>{
	console.error(e)
})
// TODO: Read the data
// TODO: Parse the data
// TODO: Print the data out









// function namaFungsi(param){
//  console.log('fungsi ini dipanggil ' + param)	
// }

// namaFungsi('lope ')

// let namaFungsi = function(){
// 	console.log('Ini adalah fungsi tanpa nama.')
// }

// let namaFungsi = () => {
// 	console.log('Ini adalah fungsi tanpa nama.')
// }

// namaFungsi()