function checkPalindrome(string) {
    if (string.length % 2 === 0) {
        for (let i = 0; i < string.length/2; i++){
            if (string[i] === string[string.length - 1 - i]){
                continue
            } else return false;
        } return true
    } else {
        let halfStringLength = Math.round(string.length/2) - 1
        for (let i = 0; i < halfStringLength; i++){
            if (string[i] === string[string.length - 1 - i]){
                continue
            } else return false;
        } return true
    }
}

const palindromes = function (string) {
    string = string.replace(/[\.,-\/#!$%\^&\*;:{}=\-_`~()@\+\?><\[\]\+]/g, '');
    string = string.replace(/\s+/g, '');
    string = string.toLowerCase();
    return checkPalindrome(string);
};

palindromes('Animal loots foliated detail of stool lamina.');

// Do not edit below this line
module.exports = palindromes;
