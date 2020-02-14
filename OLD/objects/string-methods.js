let name = ' Andrew Mead ';

// console.log(name.toUpperCase());

// Includes
let password = "abc123adasdaadssa098";
// console.log(password.includes("password"));

//Trim
let cort = "abc123asda sdas da098"
// console.log(cort.trim());



//Challenge
let validaSenha =  function(senha) {
    return senha.length > 8 && !senha.includes("password");
}

console.log(validaSenha('asdsaasdasdasdas'));