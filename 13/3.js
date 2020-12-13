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

let i = 1;
let t = 0;

offsets.forEach(([ID, offset]) => {
  while ((t + offset) % ID !== 0) {
    t += i;
  }
  i *= ID;
});

console.log(t);
