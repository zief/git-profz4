let profile = require('./profile.js')

let profiles = process.argv.slice(2)
profiles.map(profile.get)








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