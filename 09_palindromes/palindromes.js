const palindromes = function (word) {
    cleanWord = word.toLowerCase().replace(/[^a-z]/g, "");

    half = Math.floor(cleanWord.length/2)
    return cleanWord.slice(0, half) == cleanWord.slice(-half).split('').reverse().join('')
    
};

// Do not edit below this line
module.exports = palindromes;
