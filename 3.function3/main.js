function alphabetSort(message){
    // wirte your code here
    var alphabet = message.split(""), sortedAlphabet = '';
    alphabet.sort();
    for(let x=0; x<alphabet.length; x++){
      sortedAlphabet += alphabet[x];
    }
    return sortedAlphabet;
}
console.log(alphabetSort('hello')); // should return 'ehllo'