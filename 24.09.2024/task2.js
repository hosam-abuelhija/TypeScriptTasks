var _a;
var numbers = [6, 2, 3, 5, 15, 18, 30, 40];
var sum = 0;
for (var i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}
console.log(sum);
function checknums() {
    for (var i = 0; i < numbers.length; i++) {
        if (numbers[i] < 0) {
            console.log("Not All Positive");
            return;
        }
    }
    console.log("All Positive");
}
checknums();
var names = ["ali", "muhammed", "bassam", "hosam"];
var longestName = "";
for (var i = 0; i < names.length; i++) {
    if (names[i] > longestName) {
        longestName = names[i];
    }
}
console.log(longestName);
var string = "potatoo";
var character = "o";
var counter = 0;
for (var i = 0; i < string.length; i++) {
    if (string[i] === character) {
        counter++;
    }
}
console.log(counter);
for (var i = 0; i < numbers.length; i++) {
    for (var a = numbers[i] - 1; a > 1; a--) {
        if (numbers[i] % a === 0) {
            console.log(numbers[i] + " is not a prime number");
            break;
        }
    }
}
var numbers2 = [6, 2, 2, 2, 15, 15, 30, 40];
var NumbersCount = [];
for (var i = 0; i < numbers2.length; i++) {
    for (var a = 0; a < NumbersCount.length; a++) {
        if (numbers2[i] === NumbersCount[a][numbers2[i]]) {
            NumbersCount[a].numbers2[i]++;
            break;
        }
        else {
            NumbersCount.push((_a = { numbers2: numbers2 }, _a[i] = 1, _a));
            break;
        }
    }
}
console.log(NumbersCount);
