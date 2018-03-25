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

// TODO: [x] Read the data
let request = https.request(options, (response) => {
	
	let body = ''
	response.on('data', (data) => {
		body = body + data
	})
	response.on('end', () =>{
		// TODO: [x] Parse the data
	 	// Conver string to JSON (JavaScript Object)
	 	let profile = JSON.parse(body)
	 	//console.log(profile.login + ' owns ' + profile.public_repos + ' repo(s) ' )

	 	// TODO: [x] Print the data out
		console.log(`${profile.login} owns ${profile.public_repos} repo(s) and has ${profile.followers} follower(s).`)
	})

	

})

request.end()
request.on('error', (e) =>{
	console.error(e)
})











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