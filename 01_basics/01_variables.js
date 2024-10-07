const accountId = 144553
let accountEmail = "shivamrishisr@gmail.com"
var accountPassword = "password"
accountCity = "Chandigarh"
let accountState; // undefined

// accountId = 2 // not allowed

accountEmail = "sr@gmail.com"
accountPassword = "test"
accountCity = "chd"

/*
Preferred not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
