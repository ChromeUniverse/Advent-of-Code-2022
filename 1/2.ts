import fs from "fs";

let caloriesForEachElf: number[] = [];

const lines = fs.readFileSync(`${__dirname}/1.txt`).toString().split("\n");

let caloriesForCurrentElf = 0;

for (const line of lines) {
  if (line === "") {
    caloriesForEachElf.push(caloriesForCurrentElf);
    caloriesForCurrentElf = 0;
  } else {
    const caloriesForSnack = Number(line);
    caloriesForCurrentElf += caloriesForSnack;
  }
}

const sorted = caloriesForEachElf.sort((a, b) => b - a);
const sum = sorted[0] + sorted[1] + sorted[2];
console.log(sum);
