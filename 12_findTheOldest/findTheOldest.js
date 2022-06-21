// const findTheOldest = function (array) {
//     return oldestPerson = array.reduce((previous, current) => {
//         let thisYear = new Date().getFullYear()
//         if (!current.yearOfDeath) {
//             currentAge = thisYear - current.yearOfBirth
//         } else {
//             currentAge = current.yearOfDeath - current.yearOfBirth;
//         }
//         if (!previous.yearOfDeath) {
//             previousAge = thisYear - previous.yearOfBirth
//         } else {
//             previousAge = previous.yearOfDeath - previous.yearOfBirth;
//         }
//         return currentAge > previousAge ? current : previous;
//     })
// };

const people = [
    {
      name: "Carly",
      yearOfBirth: 1942,
      yearOfDeath: 1970,
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
]

const findTheOldest = function (array) {
    const oldestPerson = array.map(item => {
        const age = item.yearOfDeath - item.yearOfBirth
    })

    return oldestPerson
}
console.log(findTheOldest(people))

// Do not edit below this line
module.exports = findTheOldest;
