let name = '  Guilherme  '

//length property
console.log(name.length);

//uppercase
console.log(name.toUpperCase());

//lowercase
console.log(name.toLowerCase());

//includes method
let password = "abc123password"
console.log(password.includes('password'));

//trim
console.log(name.trim());

let isValidPassword = function(password) {
    return password.length > 8 && !password.includes('password');
}

console.log("password: " + isValidPassword("asfdasdasdasdasd"));