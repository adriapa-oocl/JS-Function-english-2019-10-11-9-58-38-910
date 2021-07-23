function palindrome(message) {
    var reverseMessage = '', checkPalindrome = '';
    for (var x = message.length-1; x>=0; x--) {
        reverseMessage += message[x];
    }
    if (message == reverseMessage){
        checkPalindrome = true;
    }
    else{
        checkPalindrome = false;;
    }
    return checkPalindrome;
}
console.log(palindrome('hello'));  // should return false
console.log(palindrome('abcba')); // should return true

