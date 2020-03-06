let restaurant = {
    name: 'Pitangas',
    guestCapacity: 75,
    guestCount: 0,
    checkAvailability: function(partySize) {
        let seatsLeft = this.guestCapacity - this.guestCount;
        return partySize <= seatsLeft;
    },
    seatParty: function(partySize) {
        this.guestCount += partySize;
    },
    removeParty: function(partySize) {
        this.guestCount -= partySize;
    }    
}

console.log(restaurant.guestCount);
restaurant.seatParty(30);
console.log(restaurant.guestCount);
console.log(restaurant.checkAvailability(20));
restaurant.seatParty(45);
console.log(restaurant.guestCount);
console.log(restaurant.checkAvailability(20));
restaurant.removeParty(30);
console.log(restaurant.guestCount);
console.log(restaurant.checkAvailability(20));