const fibonacci = function (n) {
    if (n < 0) {
        return 'OOPS'
    } else return Math.round((Math.pow(((1 + Math.sqrt(5)) / 2), n) - Math.pow(((1 - Math.sqrt(5)) / 2), n)) / Math.sqrt(5))
};

// Do not edit below this line
module.exports = fibonacci;
