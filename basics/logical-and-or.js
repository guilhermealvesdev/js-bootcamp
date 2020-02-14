let isGuestOneVegan = false;
let isGuestTwoVegan = false;

if (isGuestOneVegan && isGuestTwoVegan) {
    console.log('only vegan food');
} else if (isGuestOneVegan || isGuestTwoVegan) {
    console.log('offer vegan food');
} else {
    console.log('offer anything');
}