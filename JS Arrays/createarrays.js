var generatedArray = new Array('Altuve', 'Correa', 'Spring');

var literalArray = [1, 2, 3];

var literalArray = ['Hi', 'Hello', 'Sup'];

var mixedArray = ['Howdy', 1, ['a', 'b', 'c'], {name: 'Brandon' }, function greeting() {console.log('Hey there');}]

//!Grab a Single element, simple array
literalArray[0]

//! To call for nested arrays its as follows. First 2 is to call the Array and then run 2 again to call for 'C'.

mixedArray[2][2]; //*Returns the 'c'.

mixedArray[3]; //!Returns Object {name: 'Kristine'}

mixedArray[3].name; //!Returns "Kristine"

mixedArray[4]; //!Just returns the function itself.

mixedArray[4](); //!Function is executed by doing it this way.