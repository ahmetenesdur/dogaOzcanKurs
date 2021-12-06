/*var i;
var fib = [];

fib[0] = 0;
fib[1] = 1;

for(i=2;i<10;i++){
  fib[i]= fib[i-2] + fib[i-1];

  console.log(fib[i]);
}
*/
function listFibonacci(n) {
  for(var fibonacci=[0,1],i=1;i<n;i++)
  fibonacci.push(fibonacci[i]+fibonacci[i-1])
  
  return fibonacci
}

let arr = []

arr= listFibonacci(2);
console.log(arr);