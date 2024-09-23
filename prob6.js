function countWordsInSentences(sentences) {
    return sentences.map((sentence, index) => {
      const wordCount = sentence.split(' ').filter(word => word.length > 0).length;
      return `sentence ${index + 1} contains ${wordCount} words`;
    });
  }
  
  const sentences = [
    "The quick brown fox jumps over the lazy dog.",
    "She sells seashells by the seashore.",
    "I have a dream that one day this nation will rise up.",
    "To be or not to be, that is the question.",
    "In the beginning, God created the heavens and the earth.",
  ];
  
  const wordCounts = countWordsInSentences(sentences);
  console.log(wordCounts);
  