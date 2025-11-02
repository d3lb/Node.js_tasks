for (let j = 1; j <= 237; j++) {
  if (primeNumber(j)) console.log(j);
}

function primeNumber(num) {
  if (num === 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}
