var str = 'The quick brown fox jumped over the lazy dog';

str.length;
//returns character count in the string

str.charAt(2);
// Its an index, starts at zero, this would return the 'e' in 'the'

str.charAt(200);
// returns an empty string.

str.charAt(3);
//returns a " ", which is the space between the and quick

str.concat('again and again');
//returns "The quick brown fox jumped over the lazy dog again and again", it is just in that instance, not permanently.

var newStr = str.concat('again and again');
// ^^This would make the instance change permanent by giving it a new variable. The original string stays the same and is still callable.

str.includes('quick');
//returns true as the string does contain the word 'quick'.

str.includes('foo');
//returns false as the string does not contain the word foo

str.startsWith('The')
//returns true, as it starts with it.

str.startsWith('quick')
//returns false as it does not start with quick.

str.endsWith('dog')
//returns true, also works if you put 'g' instead of 'dog' because its checking the character

str.endsWith('lazy dog')
//returns true because the 'g'

str.endsWith('dog')
//you guessed it, returns true because of the 'g'.

str.endsWith('quick')
//returns false.

str.repeat(5);
//repeats the string however X amount of times, does NOT alter the original string, just an instance change.

str.match()
//Finds patterns

str.replace('fox', 'wolf');
//replaces the first item with the second

str.search
//any number 0 + means it found it, -1 means it did NOT find it.

str.indexOf('jumped');
//returns index of 20, based off of the first letter. "The quick brown fox jumped over the lazy dog" the J in jumped is at index 20.

var str2 = str.concat(' again and again');
str2
str2.indexOf('again');
//returns 45
str2.lastIndexOf('again');
//returns 55, returns the last one found, and if you need to find all then use match.

str.slice(10);
//will return all items to the RIGHT of the 10th item in the index

str.slice(-8);
//returns it backwards

str.slice(4, 10);
//returns from the 4th index to the last index number

var messyString = '     foo     ';
messyString; 
//returns "     foo      "
messyString.trim();
//returns "foo".

str.slice(4, 10);
str.slice(4, 10).trim();
//Chains the methods together, causing it to return "quick" rather then "quick "

str.toUpperCase();
//turns the string with all uppercase characters

str.toLowerCase();
//returns the string as all lowercase characters


16