//* "This" is a very important word in JS

// $('.btn-guide').click(function(event) {
//   event.preventDefault();
//   console.log($(this));
// });

/*this keyword in javascript always holds the reference to a single object, that defines the current line of code’s execution context. Functions, in JavaScript, are essentially objects. Like objects, they can be assigned to variables, passed to other functions, and returned from functions. And much like objects, they have their own properties. One of these properties is this.

The value that this store is the current execution context of the JavaScript program. Thus, when used inside a function this value will change depending on how that function is defined, how it is invoked and the default execution context. this keyword will refer to different objects depending upon how it is used. */
function whodis(){
  console.log(this)
}

//! ------------------------------------------------------BREAK-------------------------------------------------

//* This is apart of the next video, covering same thing so making it on the same page for reference later.
//* The code is going to be ran on Codepen then I will put it here for reference. 

var guide = {
  title: 'Guide to Programming',
  content: 'Content goes here...',
  visibleToUser: function (viewingUserRole) {
    if (viewingUserRole === 'paid') {
      return true;
    } else {
      return false;
    }
  },
  renderContent: function(userRole) {
    if (this.visibleToUser(userRole)) {
      console.log(this.title + " - " + this.content);
    } else {
      this.content = '';
      console.log(this.title + " - " + this.content);
    }
  }
}

user = { role: 'paid' };
guide.renderContent(user.role);