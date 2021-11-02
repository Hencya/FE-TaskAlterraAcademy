var a = 5;
let b = "Kampus Merdeka";
const nama = "Budi";
let terdafatar = false;
let lengkap_arr = [a, b, nama, terdafatar];

function perkenalan() {
  let asal = "Indonesia";
  return console.log(
    "Perkenalkan nama saya " +
      nama +
      " nomor urut " +
      a +
      " sekarang sedang mengikuti " +
      b +
      " berasal dari " +
      asal
  );
}
terdafatar = true;
if (terdafatar === true) {
  console.log(nama + " terdaftar sebagai kegiatan kampus merdeka");
}

a = b;
// nama = b;

// console.log("asal diakses = " + asal);
console.log("array = " + lengkap_arr[2]);
console.log("a adalah = " + a);
console.log("b adalah = " + b);
perkenalan();

console.log();

console.log(
  "============================================================================================================================================"
);
console.log("no.2");
console.log(
  "a. pada baris ke-21,22,23 tidak dapat tampil karena variabel terdaftar bernilai false"
);
console.log(
  "b. baris ke-26 menyebabkan error karena kita tidak biasa me re-assign(override) variabel bertipe konstanta"
);
console.log(
  "c. pada baris ke-29 tetap tidak dapat dieksekusi walaupun baris ke-26 dikomen karena variabel asal adalah variable ber-scope lokal di function perkenalan"
);

console.log();

console.log(
  "============================================================================================================================================"
);
console.log("no.3");
const foo = ["Budi", "Sita", "Ayu"];
[a, b, c] = foo;
console.log("a = " + a);
console.log("b = " + b);
console.log("c = " + c);

console.log();

console.log(
  "============================================================================================================================================"
);
console.log("no.4");

let bdays = ["10-17", "05-19", "20-19"];
for (let i = 0; i < bdays.length; i++) {
  let day;
  day = bdays[i].split("");
  day[2] = "/";
  bdays[i] = day.join("");
}
console.log(bdays);

console.log();

console.log(
  "============================================================================================================================================"
);
console.log("no.5");
let value = [1, 2, 3, 4, 5, 6];
const array1 = value.map((x) => x * 2);
console.log(array1);

console.log();

console.log(
  "============================================================================================================================================"
);
console.log("no.6");
let arr = [1.5, 2.56, 5.1, 12.33];
const array2 = arr.map((x) => Math.ceil(x));
console.log(array2);
