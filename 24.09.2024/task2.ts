let numbers: number[] = [6, 2, 3, 5, 15, 18, 30, 40];
let sum: number = 0;
for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}
console.log(sum);

function checknums() {
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < 0) {
      console.log("Not All Positive");
      return;
    }
  }
  console.log("All Positive");
}
checknums();

let names: string[] = ["ali", "muhammed", "bassam", "hosam"];
let longestName: string = "";
for (let i = 0; i < names.length; i++) {
  if (names[i] > longestName) {
    longestName = names[i];
  }
}
console.log(longestName);

let string: string = "potatoo";
let character: string = "o";
let counter: number = 0;
for (let i = 0; i < string.length; i++) {
  if (string[i] === character) {
    counter++;
  }
}
console.log(counter);


for (let i = 0; i < numbers.length; i++) {
  for (let a = numbers[i] - 1; a > 1; a--) {
    if (numbers[i] % a === 0) {
        console.log(numbers[i] + " is not a prime number");
        break;
    } 
  }
}


// let numbers2: number[] = [6, 2, 2, 2, 15, 15, 30, 40];
//  let NumbersCount: any[] = [];
// for (let i = 0; i < numbers2.length; i++) {
// for (let a = 0; a < NumbersCount.length; a++) {
//   if (numbers2[i] === NumbersCount[a][numbers2[i]]) {
//     NumbersCount[a].numbers2[i]++;
//     break;
//   }else{
//     NumbersCount.push({numbers2[i]: 1});
//     break;
//   }
// }
// }
// console.log(NumbersCount);


