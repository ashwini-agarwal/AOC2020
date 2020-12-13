let buses = [29, 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 41, 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 521, 'x', 'x', 'x', 'x', 'x', 'x', 'x', 23, 'x', 'x', 'x', 'x', 13, 'x', 'x', 'x', 17, 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 601, 'x', 'x', 'x', 'x', 'x', 37, 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 19];
// buses = [7, 13, 'x', 'x', 59, 'x', 31, 19];

let offset = 0;
let offsets = [];
buses.forEach((ID) => {
  if (ID !== 'x') {
    offsets.push([ID, offset]);
  }
  offset += 1;
});
console.log(offsets);
offsets = offsets.sort((a, b) => b[0] - a[0]);

console.log(offsets);

let found = false;
let start = 100000000000000;
let i = Math.floor(start / (521 * 29));
let num;

while (!found) {
  num = i++ * (521 * 29) - 29;
  console.log(num);

  found = offsets.reduce((found, [ID, offset]) => {
    return found && ((num + offset) % ID === 0);
  }, true) || true;
}
console.log(num);