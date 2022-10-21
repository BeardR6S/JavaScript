//TODO Lookup Object.keys documentation 
//? (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys) 
//? (https://www.geeksforgeeks.org/javascript-object-keys-function/)

//TODO Lookup bitwise operators documentation
//? (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_AND)
//? (https://www.geeksforgeeks.org/javascript-bitwise-operators/)

const weightedLottery = weights => {
    //TODO Keep track of weights
    //TODO ['green', 'yellow', 'yellow', 'red', 'red', 'red']
    let containerArray = [];

    Object.keys(weights).forEach(key => {
        for (let i = 0; i < weights[key]; i++) {
            containerArray.push(key);
        }
    })
    return containerArray[(Math.random() * containerArray.length) | 0];
}

const weights = {
    winning: 1,
    loosing: 1000
}

weightedLottery(weights); //?