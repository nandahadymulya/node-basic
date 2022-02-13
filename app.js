// console.log("Hai, Nans!");

// var a = 5;
// var b = 10;
// console.log(a + b);

// function tambah(a, b) {
//   return a + b;
// }
// console.log(tambah(5, 10));

// Module Built-in Node.js
// const fs = require("fs");

// fs.copyFileSync("text.txt", "text2.txt");
// console.log("File text.txt copied to text2.txt");

// Module NPM library Superheroes.
// const heros = require("superheroes");

// for (let i = 0; i < 10; i++) {
//   console.log(heros.random());
// }

const op = require("./module");

const moduleTitle = op.title;
const moduleTambah = op.tambah(10, 5);
const moduleKali = op.kali(10, 5);

console.log(moduleTitle);
console.log(moduleTambah);
console.log(moduleKali);
