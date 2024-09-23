const words = [
    "racecar",
    "hello",
    "deified",
    "world",
    "level",
    "programming",
    "radar",
    "civic",
    "javascript",
  ];
  
  const palindromes = words.filter(word => {
    return word === word.split('').reverse().join('');
  });
  
  console.log(palindromes)
  