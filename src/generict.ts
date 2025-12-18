const gameScores = [14, 21, 33, 42, 59];
const favoriteThings = [
  "raindrops on roses",
  "whiskers on kittens",
  "bright copper kettles",
  "warm woolen mittens",
];
const voters = [
  { name: "Alice", age: 42 },
  { name: "Bob", age: 77 },
];

function getLastItem<Type>(array: Type[]): Type {
  //here <Type> means the parameter can be of any type but is an array and this function element of this same type
  const last = array[array.length - 1]!;
  return last;
}
console.log(getLastItem(gameScores)); //here we are passing an argument which is an array of numbers currently
console.log(getLastItem(favoriteThings)); //here we are passing an argument which is an array of strings currently
console.log(getLastItem(voters)); //here we are passing an argument which is an array of objects currently
