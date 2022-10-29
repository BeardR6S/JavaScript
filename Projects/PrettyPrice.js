const prettyPrice = (grossPrice, extension) => {
    if (Number.isInteger(extension)) {
        extension = extension * 0.01;
    }
    return Math.floor(grossPrice) + extension;

}

prettyPrice(3.42, 0.95); //?
prettyPrice(3.42, 0.50); //?


prettyPrice(3, 95); //?
prettyPrice(50, 75); //?

//! Strips the everything after the Decimal. Math.floor()
Math.floor(3.50); //?
Math.floor(10.83)//?