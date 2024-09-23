function sumOfSquaresOfOddNumbers(numbers) {
    return numbers
      .filter(num => num % 2 !== 0)   
      .map(num => num * num)
      .reduce((sum, square) => sum + square, 0); 
  }
  
  const numbers = [1, 2, 3, 4, 5, 7];
  
  const result = sumOfSquaresOfOddNumbers(numbers);
  console.log(result); 