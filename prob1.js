const strings = [
    "apple",
    "banana",
    "apple",
    "orange",
    "banana",
    "pear",
    "apple",
  ];

  
  const counts = strings.reduce((acc, elem) => {
    acc[elem] = (acc[elem] || 0) + 1;
    return acc;
  }, {});
  
  console.log(counts);
  