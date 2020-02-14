let isGuestOneVegan = false;
let isGuestTwoVegan = false;

if (isGuestOneVegan && isGuestTwoVegan) {
    console.log ('vegan only');
} else if (isGuestOneVegan || isGuestTwoVegan) {
    console.log('some options');
} else {
    console.log('everything');
}