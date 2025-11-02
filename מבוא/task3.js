const arr = [1, 2, 0, 0, 0, 3, 0, 5, 6, 42, 1, 0, 5]; // Array with 5 zeros
let counter = 0;

arr.forEach((e) => {
  counter += e === 0;
});

console.log(counter);
