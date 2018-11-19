function primeRecursion(num) {
  if (!isPrime(num)) {
    return primeRecursion(num-1);
  }else {
    if (num == 1) {
      console.log(num);
    } else {
      console.log(num);
      primeRecursion(num-1);
    }     
  }
  function isPrime(num){
    let d = 2;
    while ((d * d <= num && (num % d)!= 0)){
    	d++;
    } 
    return (d * d > num)
  }
}

primeRecursion(10)