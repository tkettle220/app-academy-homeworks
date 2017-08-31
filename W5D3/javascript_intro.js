
function madLib(verb, adj, noun) {
  return `We shall ${verb.toUpperCase()} the ${adj.toUpperCase()} ${noun.toUpperCase()}`;
}

function isSubstring(searchString, subString) {
  return searchString.search(subString) != -1;
}


function fizzBuzz(array) {
  return array.filter( x => (x%5==0 || x%3==0) && (x%15 != 0) ? true : false );
}

function isPrime(number) {
  for (let i = 2; i < number; i++) {
    if(number%i == 0) {
      return false;
    }
  }
  return true;
}

function sumOfNPrimes(n){
  return firstNPrimes(n).reduce( (sum,val) => sum+val );
}

function firstNPrimes(n) {
  let arr = [];
  let i = 2;
  while (arr.length < n) {
    if (isPrime(i)) {
      arr.push(i) ;
    }
    i++;
  }
  return arr;
}
