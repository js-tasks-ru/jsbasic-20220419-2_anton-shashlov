function factorial(n) {
    
  let nFactorial = n;
  
  if (n > 1) {
      for (let i = 1; i < n; i++) {
      nFactorial = nFactorial * (n - i); 
      }
  }
  if (n == 0 || n == 1) {
    nFactorial = 1;
  }
   // ваш код...
  return nFactorial;
}
