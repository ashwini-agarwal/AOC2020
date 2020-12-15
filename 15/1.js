const starting_numbers = [15, 12, 0, 14, 3, 1];

let game = starting_numbers;
while (game.length < 2020) {
  let found = game.slice(0, -1).lastIndexOf(game[game.length - 1]);
  game.push(found === -1 ? 0 : game.length - 1 - found);
}

console.log(game[2019]);
