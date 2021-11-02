var _ = require("lodash");

function countingValleys(str) {
  let jumlahLembah = 0;
  let tinggi = 0;
  let n = str.length;

  for (let i = 0; i < n; i++) {
    let char = str.charAt(i);

    if (char === "U") {
      tinggi++;

      if (tinggi === 0) {
        jumlahLembah++;
      }
    } else {
      tinggi--;
    }
  }

  return jumlahLembah;
}

console.log(countingValleys("DDUUDDUDUUUD"));
console.log(countingValleys("UDDDUDUU"));
console.log(
  countingValleys(
    "DUDUUUUUUUUDUDDUUDUUDDDUUDDDDDUUDUUUUDDDUUUUUUUDDUDUDUUUDDDDUUDDDUDDDDUUDDUDDUUUDUUUDUUDUDUDDDDDDDDD"
  )
);
console.log(countingValleys("UDUD"));
