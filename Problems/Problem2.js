const fs = require("fs");

// Read the csv file remove blank edges, split it ,and set it in array
const rows = fs.readFileSync("prediction.csv", "utf-8").trim().split("\n");

// Create objects for each type
let suits = {};
let animals = {};
let fruits = {};

// Loop on each row of above array
for (let i = 1; i < rows.length; i++) {
  // split the row with , and trim edges and set data in variables
  let [suit, animal, fruit, result] = rows[i].split(",").map((x) => x.trim());

  // Keep data the same or create it if its not created
  suits[suit] = suits[suit] || { wins: 0, losses: 0 };
  animals[animal] = animals[animal] || { wins: 0, losses: 0 };
  fruits[fruit] = fruits[fruit] || { wins: 0, losses: 0 };

  // if result true add win else add lose
  // TODO: Fix repetitions
  if (result === "True") {
    suits[suit].wins++;
    animals[animal].wins++;
    fruits[fruit].wins++;
  } else {
    suits[suit].losses++;
    animals[animal].losses++;
    fruits[fruit].losses++;
  }
}

// calculate percentage by summing all 3 percentage of win = win / total(win+loss) and getting percentage of it
function probabilityToBeatBoss(suit, animal, fruit) {
  function calc(stat, key) {
    let t = stat[key].wins + stat[key].losses;
    return t ? stat[key].wins / t : 0;
  }
  return (
    ((calc(suits, suit) + calc(animals, animal) + calc(fruits, fruit)) / 3) *
    100
  );
}

console.log(probabilityToBeatBoss("Hearts", "Lion", "Mango"));
