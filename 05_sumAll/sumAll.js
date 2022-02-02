const sumAll = function (initialNumber, finalNumber) {
    let sum = 0;

    if (initialNumber < 0 || finalNumber < 0) {
        return 'ERROR'
    } else if (typeof initialNumber === 'string' || typeof finalNumber === 'string') {
        return 'ERROR'
    } else if (typeof initialNumber === 'object' || typeof finalNumber === 'object') {
        return 'ERROR'
    } else if (finalNumber > initialNumber) {
        for (let i = initialNumber; i < finalNumber + 1; i++) {
            sum += i
        } return sum
    } else if (finalNumber < initialNumber) {
        for (let i = finalNumber; i < initialNumber + 1; i++) {
            sum += i
        } return sum
    } 
};
sumAll(1, 4);

// Do not edit below this line
module.exports = sumAll;
