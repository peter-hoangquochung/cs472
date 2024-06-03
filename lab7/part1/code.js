// Sum all elements in an array
const calculateSum = (numbers) => {
    return numbers.reduce((total, num) => total + num, 0);
  };
  
  // Multiply all elements in an array
  const calculateProduct = (numbers) => {
    return numbers.reduce((product, num) => product * num, 1);
  };
  
  // Reverse a string
  const reverseString = (str) => {
    return str.split("").reverse().join("");
  };
  
  // Filter words longer than a given length
  const getLongWords = (words, minLength) => {
    return words.filter(word => word.length > minLength);
  };
  
  