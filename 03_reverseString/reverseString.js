const reverseString = function(word) {
    let newString = word.split('');
    newString.reverse();
    let stringReversed = newString.join('');
    return stringReversed;
};

// Do not edit below this line
module.exports = reverseString;
