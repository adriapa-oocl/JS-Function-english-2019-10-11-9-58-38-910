function countWords(message){
  // wirte your code here
  var word = message.split(" ");
  return word.length;
}
console.log(countWords('Good morning, I love JavaScript.')); // should return 5