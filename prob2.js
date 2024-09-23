function sumDivisibleByThreeOrFive(arr) {
    return arr.reduce((sum, num) => {
      if (num % 3 === 0 || num % 5 === 0) {
        return sum + num;
      }
      return sum;
    }, 0);
  }
  
  const numbers = [7, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597];
  console.log(sumDivisibleByThreeOrFive(numbers)); 
  