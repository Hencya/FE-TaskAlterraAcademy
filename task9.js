console.log("===============");
console.log("no 1");
let nilai1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let nilai2 = 0;
nilai1.forEach((x) => {
  nilai2 += x;
});
console.log(nilai2);
console.log();

console.log("===============");
console.log("no 2");
let filterValue = [-4, 3, 2, -21, 1];
let result2 = filterValue.filter((x) => x > 0);
console.log(result2);
console.log();

console.log("===============");
console.log("no 3");
var data = [
  { name: "daniel", age: 45 },
  { name: "john", age: 30 },
  { name: "robert", age: null },
  { name: "jen", age: undefined },
  { name: null, age: undefined },
];
let result3 = data.filter(
  (x) => typeof x["name"] === "string" && typeof x["age"] === "number"
);
console.log(result3);
console.log();

console.log("===============");
console.log("no 4");
let konfersiMenit = (time) => {
  let jam = 0;
  let menit = 0;
  while (time >= 60) {
    jam += 1;
    time -= 60;
  }

  if (time >= 0) {
    if (time >= 10) {
      menit = time;
    } else {
      menit = `0${time}`;
    }
  }

  return `${jam}:${menit}`;
};
console.log(konfersiMenit(88));
console.log(konfersiMenit(53));
console.log(konfersiMenit(120));
console.log(konfersiMenit(124));
console.log();

console.log("===============");
console.log("no 5");
function inputHarusGenap(angka) {
  if (angka % 2 !== 0) {
    throw "Invalid";
  }
  return "valid";
}

try {
  console.log(inputHarusGenap(7));
} catch (e) {
  console.log(e);
}

try {
  console.log(inputHarusGenap(4));
} catch (e) {
  console.log(e);
}
console.log();

console.log("===============");
console.log("no 6");
function perkalianUnik(arr) {
  let arrRes = [];
  for (let i = 0; i < arr.length; i++) {
    let result = 1;
    for (let j = 0; j < arr.length; j++) {
      if (j != i) {
        result *= arr[j];
      }
    }
    arrRes[i] = result;
  }
  return arrRes;
}

console.log(perkalianUnik([2, 4, 6]));
console.log(perkalianUnik([1, 2, 3, 4, 5]));
console.log(perkalianUnik([1, 4, 3, 2, 5]));
console.log(perkalianUnik([1, 3, 3, 1]));
console.log(perkalianUnik([2, 1, 8, 10, 2]));
console.log();
