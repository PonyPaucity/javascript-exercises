const fibonacci = function (member) {
    if (typeof (member) === String) {
        member = Number(member);
    }
    if (member < 0) {
        return 'OOPS'
    } else {
        return calcFib(member);
    }
};

function calcFib(member) {
    let n1 = 0;
    let n2 = 1;
    let nextFib = 0;
    if (Number(member) === 1) {
        return nextFib = 1;
    }
    for (let i = 1; i < member; i++) {
        nextFib = n1 + n2;
        n1 = n2;
        n2 = nextFib;
    }
    return nextFib;
}

console.log(fibonacci('1'))
// Do not edit below this line

module.exports = fibonacci;
