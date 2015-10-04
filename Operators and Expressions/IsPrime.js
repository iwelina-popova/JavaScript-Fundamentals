/*
 Write an expression that checks if given positive integer number n (n ? 100) is prime.
 Examples:

 n	Prime?
 1	false
 2	true
 3	true
 4	false
 9	false
 37	true
 97	true
 51	false
 -3	false
 0	false
 */

var primeNumber = 97,
    notPrimeNumber = 1,
    i;

console.log(isPrime(primeNumber));
console.log(isPrime(notPrimeNumber));

function isPrime(input) {
 if (input === 0 || input === 1) {
  return false;
 } else {
  for (i = 2; i < input; i += 1) {
   if (input % i === 0) {
    return false;
   }
  }
  return true;
 }
}
