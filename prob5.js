function swapFirstAndLast(strings) {
    return strings.map(str => {
      if (str.length <= 1) return str; // Return the string unchanged if it's one character long
      const first = str[0];
      const last = str[str.length - 1];
      return last + str.slice(1, -1) + first;
    });
  }
  
  const strings = [
    "Hello",
    "world",
    "this",
    "is",
    "an",
    "example",
    "array",
    "of",
    "strings",
  ];
  
  const swappedStrings = swapFirstAndLast(strings);
  console.log(swappedStrings);
