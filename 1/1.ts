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

console.log(caloriesForEachElf);

let max = 0;
for (const cal of caloriesForEachElf) {
  if (cal > max) max = cal;
}

console.log(max);
