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


const findTheOldest = function (people) {

    people.forEach((person) => {
        if (person.yearOfDeath > 0) {
            person.age = person.yearOfDeath - person.yearOfBirth
        } else {
            person.age = new Date().getFullYear() - person.yearOfBirth
        }
    })

    const oldestAge = Math.max.apply(Math, people.map((o) => { return o.age }))

    const oldestPerson = people.find((o) => { return o.age == oldestAge; })

    return oldestPerson
};

findTheOldest(people);

// Do not edit below this line
module.exports = findTheOldest;
