const toThePowerOf = (num, exp) => {
    const items = Array(exp).fill(num);
    const reducer = (total, currentValue) => total * currentValue;
    return items.reduce(reducer);
}

toThePowerOf(2, 3) //?
toThePowerOf(3, 3)//?
toThePowerOf(10, 120)//?
toThePowerOf(5, 75)//?
