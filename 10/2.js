let adaptors = [99, 104, 120, 108, 67, 136, 80, 44, 129, 113, 158, 157, 89, 60, 138, 63, 35, 57, 61, 153, 116, 54, 7, 22, 133, 130, 5, 72, 2, 28, 131, 123, 55, 145, 151, 42, 98, 34, 140, 146, 100, 79, 117, 154, 9, 83, 132, 45, 43, 107, 91, 163, 86, 115, 39, 76, 36, 82, 162, 6, 27, 101, 150, 30, 110, 139, 109, 1, 64, 56, 161, 92, 62, 69, 144, 21, 147, 12, 114, 18, 137, 75, 164, 33, 152, 23, 68, 51, 8, 95, 90, 48, 29, 26, 165, 81, 13, 126, 14, 143, 15];
const max = Math.max.apply(Math, adaptors);


adaptors.push(0);
adaptors = adaptors.sort((a, b) => a - b);
console.log(adaptors);

const differences = adaptors.map((value, index) => adaptors[index + 1] - value);
differences.pop();
console.log(differences);

const pattern = differences.reduce((prev, curr) => {
  if (curr === 1) {
    prev[prev.length - 1] += 1;
  } else {
    prev.push(0);
  }

  return prev;
}, [0]);
console.log(pattern);
console.log(pattern.filter(p => p > 1));

const multiplier = {
  2: 2,
  3: 4,
  4: 7,
};

const combinations = pattern.filter(p => p > 1).reduce((prev, curr) => {
  return prev * multiplier[curr];
}, 1);

console.log(combinations);
