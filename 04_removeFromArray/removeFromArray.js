const removeFromArray = function (inputArray, ...removedElements) {
    for (let i = 0; i < inputArray.length; i++) {
        for (let j = 0; j < removedElements.length; j++) {
            if (inputArray[i] === removedElements[j]) {
                console.log(inputArray[i]);
                inputArray.splice(i, 1)
                i = 0;
            }
        }
    } return inputArray
};


// Do not edit below this line
module.exports = removeFromArray;
