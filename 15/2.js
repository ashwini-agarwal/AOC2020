const starting_numbers = [15, 12, 0, 14, 3, 1];

let game = starting_numbers;
let length = game.length;
let last_num = game[length - 1];

let cache = {};
game.slice(0, -1).forEach((num, index) => cache[num] = index)

while (length < 30000000) {
  new_num = cache[last_num] === undefined ? 0 : length - 1 - cache[last_num];
  cache[last_num] = length - 1;
  last_num = new_num;
  length += 1;
}

console.log(last_num);
