var someUser = {
  name: 'Jordan'
}

function nameFormatter (user) {
  return user.name = 'Oops';
}

nameFormatter(someUser);

var someName = 'Tiffany';

function someOtherNameFormatter(name) {
  return name = 'Oops';
}

someOtherNameFormatter(someName);
//*This returns Oops rather then Tiffany

someName;
//*This returns Tiffany NOT Oops

function nameFormatter (userName) {
  return userName = 'Oops';
}
someUser.name;

someUser.name = 'Kristine';

someUser.name;

nameFormatter(someUser.name);

someUser.name;


//? https://www.youtube.com/watch?v=-hBJz2PPIVE

/* Call by Value: 

Suppose there is a variable named “a”. Now, we store a primitive value(boolean, integer, float, etc) in the variable “a”.

Let us store an integer value in “a”, Let a=5. Now the variable “a” stores 5 and has an address location where that primitive value sits in memory.

Now, suppose we copy the value of “a” in “b” by assignment (a=b). Now, “b” points to a new location in memory, containing the same data as variable “a”.

Thus, a=b=5 but both points to separate locations in memory.

This approach is called call by value where 2 variables become the same by copying the value but in 2 separate spots in the memory.*/

//! --------------------------------------------------------------------Break------------------------------------------------------------------------------

/* Call by reference: (Stored inside a memory address, not a value, aka a REFERENCE to it, if multiple variables are referencing the same thing, then it will be the same address)

Let’s say, we have an object stored in the variable “a”. 

The variable stores the location or the address where the object lives. 

Now we set b=a. Now that new variable “b” instead of pointing to a new location in the memory, points to the same location where “a” does. 

No new object is created, no copy is created. Both the variables point to the same object. 

This is like having 2 names.*/