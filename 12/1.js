const direction = [
  ["W", 5],
  ["F", 66],
  ["S", 4],
  ["E", 1],
  ["F", 78],
  ["L", 90],
  ["F", 79],
  ["S", 4],
  ["F", 64],
  ["R", 180],
  ["F", 24],
  ["N", 4],
  ["L", 90],
  ["N", 3],
  ["R", 180],
  ["E", 5],
  ["N", 5],
  ["F", 68],
  ["E", 3],
  ["L", 180],
  ["F", 56],
  ["E", 3],
  ["S", 5],
  ["F", 75],
  ["E", 1],
  ["L", 90],
  ["F", 53],
  ["S", 2],
  ["E", 3],
  ["S", 4],
  ["L", 180],
  ["W", 4],
  ["L", 90],
  ["S", 1],
  ["F", 51],
  ["L", 90],
  ["W", 3],
  ["L", 90],
  ["W", 3],
  ["F", 39],
  ["W", 2],
  ["R", 90],
  ["E", 1],
  ["R", 90],
  ["W", 4],
  ["R", 180],
  ["N", 1],
  ["E", 5],
  ["R", 90],
  ["F", 63],
  ["L", 90],
  ["N", 4],
  ["R", 180],
  ["N", 3],
  ["F", 25],
  ["W", 3],
  ["L", 90],
  ["N", 4],
  ["W", 3],
  ["S", 5],
  ["E", 3],
  ["R", 90],
  ["E", 5],
  ["F", 17],
  ["S", 5],
  ["F", 20],
  ["E", 2],
  ["L", 90],
  ["E", 1],
  ["S", 5],
  ["R", 90],
  ["F", 13],
  ["E", 3],
  ["N", 4],
  ["W", 1],
  ["L", 90],
  ["N", 3],
  ["F", 95],
  ["N", 1],
  ["F", 37],
  ["N", 2],
  ["E", 5],
  ["L", 90],
  ["W", 2],
  ["N", 5],
  ["F", 8],
  ["S", 4],
  ["E", 4],
  ["L", 90],
  ["E", 1],
  ["F", 92],
  ["S", 2],
  ["F", 26],
  ["S", 1],
  ["F", 97],
  ["E", 4],
  ["L", 90],
  ["W", 1],
  ["R", 270],
  ["F", 28],
  ["R", 90],
  ["S", 3],
  ["N", 2],
  ["F", 93],
  ["N", 1],
  ["E", 4],
  ["S", 1],
  ["E", 5],
  ["S", 1],
  ["W", 2],
  ["F", 70],
  ["N", 4],
  ["W", 5],
  ["F", 74],
  ["N", 1],
  ["L", 90],
  ["S", 2],
  ["L", 180],
  ["S", 1],
  ["E", 3],
  ["R", 180],
  ["W", 3],
  ["N", 5],
  ["L", 90],
  ["W", 3],
  ["F", 20],
  ["E", 5],
  ["R", 90],
  ["E", 2],
  ["F", 52],
  ["L", 270],
  ["E", 3],
  ["R", 90],
  ["E", 3],
  ["R", 90],
  ["F", 8],
  ["E", 5],
  ["F", 26],
  ["E", 1],
  ["F", 87],
  ["N", 1],
  ["F", 77],
  ["W", 4],
  ["F", 60],
  ["S", 2],
  ["F", 39],
  ["R", 90],
  ["S", 1],
  ["F", 5],
  ["N", 4],
  ["F", 98],
  ["W", 5],
  ["R", 90],
  ["W", 1],
  ["R", 90],
  ["S", 4],
  ["L", 90],
  ["N", 5],
  ["F", 19],
  ["S", 2],
  ["L", 270],
  ["F", 44],
  ["E", 1],
  ["F", 90],
  ["R", 90],
  ["F", 11],
  ["S", 4],
  ["R", 90],
  ["E", 2],
  ["L", 90],
  ["N", 4],
  ["R", 180],
  ["E", 5],
  ["F", 66],
  ["S", 5],
  ["F", 11],
  ["L", 180],
  ["E", 1],
  ["N", 1],
  ["L", 180],
  ["S", 3],
  ["E", 5],
  ["N", 2],
  ["W", 5],
  ["F", 75],
  ["E", 3],
  ["N", 1],
  ["W", 5],
  ["L", 90],
  ["S", 5],
  ["R", 90],
  ["S", 5],
  ["F", 2],
  ["W", 2],
  ["N", 4],
  ["F", 15],
  ["S", 5],
  ["L", 90],
  ["E", 1],
  ["F", 49],
  ["W", 5],
  ["F", 48],
  ["R", 90],
  ["N", 4],
  ["W", 5],
  ["L", 90],
  ["E", 4],
  ["L", 270],
  ["F", 77],
  ["E", 2],
  ["F", 33],
  ["E", 1],
  ["N", 2],
  ["L", 90],
  ["F", 75],
  ["E", 5],
  ["L", 90],
  ["F", 16],
  ["L", 90],
  ["F", 82],
  ["E", 4],
  ["S", 5],
  ["F", 72],
  ["S", 3],
  ["R", 270],
  ["F", 88],
  ["W", 1],
  ["L", 90],
  ["N", 5],
  ["L", 180],
  ["W", 1],
  ["R", 90],
  ["E", 1],
  ["F", 39],
  ["R", 90],
  ["F", 27],
  ["R", 90],
  ["W", 3],
  ["R", 90],
  ["F", 55],
  ["R", 180],
  ["W", 5],
  ["S", 2],
  ["F", 18],
  ["E", 3],
  ["F", 1],
  ["E", 5],
  ["N", 1],
  ["W", 4],
  ["F", 10],
  ["L", 90],
  ["F", 76],
  ["N", 4],
  ["F", 40],
  ["R", 180],
  ["E", 4],
  ["R", 90],
  ["F", 69],
  ["W", 5],
  ["R", 90],
  ["W", 3],
  ["F", 67],
  ["W", 5],
  ["N", 4],
  ["E", 5],
  ["N", 4],
  ["W", 2],
  ["L", 90],
  ["E", 5],
  ["F", 26],
  ["R", 180],
  ["F", 48],
  ["W", 3],
  ["E", 2],
  ["F", 84],
  ["E", 1],
  ["R", 90],
  ["F", 51],
  ["L", 180],
  ["S", 3],
  ["W", 5],
  ["R", 90],
  ["N", 1],
  ["F", 69],
  ["W", 2],
  ["S", 5],
  ["R", 180],
  ["F", 57],
  ["W", 2],
  ["F", 45],
  ["R", 90],
  ["N", 2],
  ["L", 90],
  ["N", 4],
  ["R", 180],
  ["F", 8],
  ["L", 180],
  ["F", 48],
  ["W", 5],
  ["L", 90],
  ["S", 5],
  ["F", 52],
  ["L", 90],
  ["S", 5],
  ["R", 90],
  ["E", 4],
  ["L", 90],
  ["N", 4],
  ["L", 90],
  ["W", 5],
  ["F", 80],
  ["R", 90],
  ["W", 1],
  ["F", 38],
  ["R", 90],
  ["F", 25],
  ["W", 1],
  ["F", 31],
  ["N", 4],
  ["S", 4],
  ["F", 91],
  ["R", 180],
  ["S", 2],
  ["L", 90],
  ["F", 30],
  ["S", 3],
  ["W", 3],
  ["S", 4],
  ["W", 1],
  ["N", 4],
  ["F", 25],
  ["R", 90],
  ["W", 3],
  ["F", 10],
  ["N", 3],
  ["R", 90],
  ["N", 3],
  ["L", 90],
  ["E", 1],
  ["S", 4],
  ["R", 90],
  ["L", 90],
  ["F", 36],
  ["E", 4],
  ["R", 180],
  ["F", 27],
  ["R", 270],
  ["F", 57],
  ["L", 180],
  ["F", 72],
  ["S", 2],
  ["R", 90],
  ["W", 1],
  ["F", 19],
  ["S", 3],
  ["F", 27],
  ["N", 4],
  ["W", 5],
  ["R", 90],
  ["F", 42],
  ["L", 180],
  ["F", 57],
  ["E", 5],
  ["F", 63],
  ["N", 3],
  ["F", 97],
  ["L", 90],
  ["S", 5],
  ["F", 11],
  ["L", 90],
  ["W", 1],
  ["F", 71],
  ["W", 3],
  ["R", 90],
  ["W", 4],
  ["F", 43],
  ["F", 71],
  ["W", 3],
  ["F", 20],
  ["N", 1],
  ["F", 75],
  ["E", 5],
  ["F", 15],
  ["N", 3],
  ["F", 3],
  ["W", 2],
  ["F", 13],
  ["W", 5],
  ["F", 88],
  ["E", 5],
  ["L", 90],
  ["N", 4],
  ["L", 90],
  ["F", 11],
  ["L", 90],
  ["F", 58],
  ["W", 2],
  ["R", 90],
  ["S", 5],
  ["F", 55],
  ["S", 4],
  ["F", 83],
  ["F", 8],
  ["N", 1],
  ["R", 90],
  ["F", 36],
  ["W", 2],
  ["F", 57],
  ["N", 4],
  ["L", 180],
  ["W", 2],
  ["F", 37],
  ["S", 1],
  ["F", 18],
  ["E", 1],
  ["F", 82],
  ["S", 5],
  ["E", 4],
  ["R", 90],
  ["E", 2],
  ["S", 5],
  ["R", 90],
  ["S", 5],
  ["R", 180],
  ["F", 91],
  ["E", 2],
  ["N", 3],
  ["F", 43],
  ["E", 2],
  ["R", 90],
  ["S", 4],
  ["E", 1],
  ["R", 90],
  ["S", 3],
  ["L", 180],
  ["F", 48],
  ["F", 57],
  ["E", 5],
  ["F", 87],
  ["S", 4],
  ["R", 90],
  ["N", 4],
  ["E", 2],
  ["N", 4],
  ["W", 5],
  ["R", 270],
  ["F", 31],
  ["N", 5],
  ["W", 5],
  ["N", 1],
  ["F", 92],
  ["S", 5],
  ["F", 40],
  ["W", 3],
  ["F", 79],
  ["L", 180],
  ["E", 5],
  ["F", 83],
  ["L", 180],
  ["N", 1],
  ["F", 30],
  ["N", 2],
  ["E", 1],
  ["S", 3],
  ["L", 90],
  ["E", 5],
  ["F", 56],
  ["R", 180],
  ["E", 4],
  ["F", 17],
  ["W", 4],
  ["L", 180],
  ["S", 5],
  ["E", 1],
  ["F", 57],
  ["E", 3],
  ["F", 99],
  ["S", 3],
  ["F", 29],
  ["L", 90],
  ["F", 61],
  ["S", 5],
  ["W", 2],
  ["S", 3],
  ["F", 83],
  ["R", 180],
  ["F", 83],
  ["E", 1],
  ["R", 90],
  ["E", 4],
  ["N", 3],
  ["W", 5],
  ["N", 3],
  ["N", 2],
  ["F", 21],
  ["L", 90],
  ["L", 90],
  ["F", 72],
  ["S", 3],
  ["L", 90],
  ["E", 3],
  ["F", 16],
  ["R", 180],
  ["F", 75],
  ["S", 3],
  ["R", 90],
  ["S", 3],
  ["L", 90],
  ["F", 82],
  ["R", 90],
  ["W", 5],
  ["R", 90],
  ["N", 4],
  ["R", 90],
  ["F", 14],
  ["N", 1],
  ["F", 59],
  ["E", 5],
  ["S", 2],
  ["W", 3],
  ["N", 3],
  ["S", 5],
  ["E", 4],
  ["F", 43],
  ["E", 2],
  ["F", 31],
  ["S", 2],
  ["F", 59],
  ["N", 2],
  ["R", 90],
  ["S", 3],
  ["L", 90],
  ["N", 3],
  ["F", 88],
  ["N", 2],
  ["F", 22],
  ["N", 4],
  ["L", 90],
  ["N", 2],
  ["L", 90],
  ["F", 21],
  ["W", 4],
  ["F", 97],
  ["R", 90],
  ["F", 29],
  ["S", 5],
  ["W", 4],
  ["F", 40],
  ["N", 3],
  ["L", 90],
  ["F", 63],
  ["N", 5],
  ["F", 56],
  ["R", 90],
  ["L", 90],
  ["S", 3],
  ["R", 90],
  ["S", 5],
  ["F", 53],
  ["N", 1],
  ["W", 3],
  ["R", 90],
  ["F", 1],
  ["S", 2],
  ["E", 4],
  ["N", 4],
  ["F", 68],
  ["R", 90],
  ["W", 3],
  ["S", 5],
  ["S", 1],
  ["E", 4],
  ["L", 180],
  ["F", 8],
  ["E", 5],
  ["L", 180],
  ["W", 5],
  ["N", 1],
  ["F", 42],
  ["S", 3],
  ["F", 61],
  ["L", 90],
  ["S", 3],
  ["F", 29],
  ["S", 4],
  ["E", 3],
  ["F", 6],
  ["R", 90],
  ["N", 2],
  ["L", 180],
  ["W", 3],
  ["F", 48],
  ["S", 5],
  ["E", 3],
  ["R", 90],
  ["E", 4],
  ["R", 180],
  ["F", 87],
  ["L", 90],
  ["F", 73],
  ["S", 2],
  ["W", 1],
  ["S", 5],
  ["E", 5],
  ["S", 4],
  ["E", 2],
  ["S", 4],
  ["F", 93],
  ["L", 90],
  ["W", 3],
  ["S", 3],
  ["F", 17],
  ["N", 5],
  ["F", 42],
  ["S", 5],
  ["R", 90],
  ["E", 1],
  ["S", 2],
  ["F", 7],
  ["S", 3],
  ["W", 2],
  ["L", 180],
  ["W", 4],
  ["F", 99],
  ["E", 5],
  ["S", 5],
  ["F", 93],
  ["L", 270],
  ["F", 20],
  ["N", 4],
  ["L", 90],
  ["F", 1],
  ["N", 1],
  ["L", 90],
  ["S", 2],
  ["F", 96],
  ["L", 180],
  ["S", 2],
  ["F", 8],
  ["L", 90],
  ["S", 4],
  ["R", 90],
  ["F", 70],
  ["W", 1],
  ["R", 180],
  ["S", 2],
  ["R", 180],
  ["N", 3],
  ["L", 90],
  ["E", 4],
  ["R", 90],
  ["F", 40],
  ["E", 1],
  ["S", 4],
  ["R", 90],
  ["W", 2],
  ["R", 90],
  ["L", 90],
  ["N", 5],
  ["L", 180],
  ["F", 5],
  ["E", 5],
  ["S", 3],
  ["F", 43],
  ["E", 2],
  ["E", 2],
  ["F", 79],
  ["E", 5],
  ["F", 66],
  ["E", 5],
  ["S", 4],
  ["E", 5],
  ["S", 4],
  ["W", 2],
  ["S", 2],
  ["F", 41],
  ["L", 90],
  ["N", 5],
  ["F", 60],
  ["W", 5],
  ["N", 4],
  ["E", 2],
  ["S", 5],
  ["R", 90],
  ["W", 2],
  ["F", 98],
  ["W", 3],
  ["S", 2],
  ["W", 5],
  ["L", 90],
  ["W", 5],
  ["F", 16],
  ["S", 5],
  ["L", 90],
  ["F", 85],
  ["R", 90],
  ["F", 56],
  ["W", 4],
  ["R", 90],
  ["E", 1],
  ["R", 90],
  ["F", 5],
  ["N", 5],
  ["E", 5],
  ["R", 90],
  ["E", 4],
  ["F", 77],
  ["S", 1],
  ["E", 5],
  ["F", 24],
  ["L", 180],
  ["W", 1],
  ["S", 3],
  ["F", 31],
  ["E", 5],
  ["S", 5],
  ["W", 4],
  ["F", 83],
  ["W", 3],
  ["N", 4],
  ["L", 90],
  ["N", 3],
  ["L", 90],
  ["E", 2],
  ["R", 180],
  ["S", 1],
  ["F", 17],
  ["R", 90],
  ["R", 180],
  ["S", 4],
  ["F", 100],
  ["E", 2],
  ["L", 180],
  ["N", 2],
  ["L", 90],
  ["E", 3],
  ["N", 5],
  ["W", 2],
  ["F", 19],
  ["W", 4],
  ["R", 180],
  ["F", 56],
  ["R", 90],
  ["W", 1],
  ["R", 90],
  ["E", 4],
  ["S", 2],
  ["R", 90],
  ["F", 10],
  ["E", 4],
  ["E", 2],
  ["F", 61],
  ["E", 1],
  ["S", 3],
  ["F", 33],
  ["N", 4],
  ["F", 95],
  ["S", 3],
  ["F", 84],
  ["L", 180],
  ["S", 1],
  ["L", 90],
  ["N", 1],
  ["E", 3],
  ["F", 40],
  ["L", 90],
  ["E", 3],
  ["S", 2],
  ["F", 56],
  ["L", 180],
  ["W", 5],
  ["S", 5],
  ["R", 90],
  ["E", 3],
  ["N", 1],
  ["F", 60],
  ["L", 90],
  ["F", 62],
];

let current_direction = 'E';
const position = {
  N: 0,
  E: 0,
  W: 0,
  S: 0,
};

const direction_master = ['N', 'E', 'S', 'W'];

direction.forEach(([action, unit]) => {
  switch (action) {
    case 'N':
    case 'E':
    case 'W':
    case 'S':
      position[action] += unit;
      break;

    case 'F':
      position[current_direction] += unit;
      break;

    case 'L':
      index = direction_master.indexOf(current_direction);
      current_direction = direction_master[(4 + index - unit / 90) % 4];
      break;

    case 'R':
      index = direction_master.indexOf(current_direction);
      current_direction = direction_master[(index + unit / 90) % 4];
      break;

    default:
      break;
  }
});

console.log(position);

const manhattan_distance = Math.abs(position.E - position.W) + Math.abs(position.N - position.S);
console.log(manhattan_distance);
