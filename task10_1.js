//load full build lodash
var _ = require("lodash");

console.log("no 1.a");

const anggota_kelas = ["budi", "sita", "ayu", "rena", "omen"];
let mengumpulkan_tugas = ["rena", "omen"];

let result1a = _.difference(anggota_kelas, mengumpulkan_tugas);
console.log(result1a);
console.log("==============================================");
console.log();

console.log("no 1.b");

let result1b = _.chunk(anggota_kelas, 2);
console.log(result1b);
console.log("==============================================");
console.log();

console.log("no 1.c");

let result1c = _.join(anggota_kelas, "-");
console.log(result1c);
console.log("==============================================");
console.log();

console.log("no 1.d");

let result1d = _.drop(anggota_kelas);
console.log(result1d);
console.log("==============================================");
console.log();

console.log("no 1.e");

let result1e = _.reverse(anggota_kelas);
console.log(result1e);
console.log("==============================================");
console.log();
