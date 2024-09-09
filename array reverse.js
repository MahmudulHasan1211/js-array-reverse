let num = [11, 22, 33, 44, 55, 66, 77, 88, 99];

// Reverse using reverse method
num.reverse();
console.log(num); // This will print the reversed array

// Reverse using for...of (manual reverse)
let rev_num = [];
for (let nu of num) {
  rev_num.unshift(nu); // Add each element to the front of rev_num
}

console.log(rev_num); // This will print the reversed array using manual method
