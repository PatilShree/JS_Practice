const accountId = 11111
let accountEmail = "ganesh@gmail.com"
var accountPassword = "112211";
accountType = "Saving";

// accountId = 222222; // Can't change value of const variable

console.log(accountId)

console.table([accountId, accountEmail, accountPassword, accountType])

/*
    Difference between let and var 

    var : Don't understand block scopes and functional scopes
    let : can handle scopes
*/