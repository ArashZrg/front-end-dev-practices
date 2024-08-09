const game = {
  team1: "Bayern Munich",
  team1: "Borrussia Dortmund",
  players: [
    ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k"],
    ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "n"],
  ],
  score: "4:0",
  scored: ["Levandovski", "messi", "ronaldo"],
  date: "Nov 9th 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// TASK 1 : this is my way
// const players1 = [...game.players[0]];
// const players2 = [...game.players[1]];
// console.log(players1, players2);

// TASK 1 : this is the teacher way
const [players1, players2] = game.players;
//console.log(players1, players2);

// TASK 2 : my way and teacher way
const [gk, ...fieldPlayers] = players1;
//console.log(gk, fieldPlayers);

// TASK 3 : my way and the taecher way
const allPlayers = [...players1, ...players2];
//console.log(allPlayers);

// TASK 4 : my way and the teacher way
const players1Final = [...players1, "arash", "mahdi", "mobin"];
console.log(players1Final);

// TASK 5 : my way
// const { team1, x: draw, team2 } = { ...game.odds };
// console.log(team1, draw, team2);

// TASK 5 : teacher way
const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);

// TASK 6 : only teacher way because i did'nt undrestand the question

function printGoals(...playersNumber) {
  console.log(`${playersNumber.length} goals wew scored and the player names
    ${playersNumber}`);
}

printGoals(...game.scored);

// TASK 7 : teacher way
team1 < team2 && console.log(`team 1 is more likely to win !`);
