const primeNum = (num) => {
  let isPrime = true;
  for (let i = 2; i < num; i++) {
    if (num % i == 0) {
      isPrime = false;
      break;
    }
  }
  if (isPrime) {
    console.log(`${num} is prime`);
  } else {
    console.log(`${num} is not prime`);
  }
};

primeNum(10);
primeNum(17);

let num = [9, 9, 9]
  .join("")

let res = Number(num) + 1
res = res.toString()
  
  

console.log(res);
