const readline = require('readline-sync');

const hasLeash = true;
const hasTreats = false;
let hasWaterBottle = false;
let hasTennisBall = false;

console.log("You're getting ready to walk Lucy and Arty around St. Louis!");
console.log("Where do you want to go?");
console.log("Type 'forest park' or 'neighborhood'");
const choice = readline.question("Your choice: ");

if (choice === "forest park" && hasLeash) {
  console.log("You safely walk through Forest Park with both dogs on leash.");
  console.log("You find a tennis ball on the ground!");
  hasTennisBall = true;
  console.log("Lucy and Arty are so excited!");
  
} else if (choice === "forest park" && !hasLeash) {
  console.log("Without a leash, the dogs run off chasing squirrels!");
  console.log("You have to go back home.");
  
} else if (choice === "neighborhood" || hasTreats) {
  console.log("You walk around the neighborhood.");
  console.log("A neighbor offers you a water bottle for the dogs.");
  hasWaterBottle = true;
  console.log("Lucy and Arty drink some water. They're happy!");
  
} else {
  console.log("The dogs get so tangled up they wrap you in their leashes!");
  console.log("You have to go back home to untangle everyone.");
}

console.log("THE END");
