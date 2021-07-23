function reverseString(message) {
    var reverseMessage = '';
    for (var x = message.length-1; x>=0; x--) {
        reverseMessage += message[x];
    }
    return reverseMessage;
}
console.log(reverseString('hello')); // should return 'olleh'