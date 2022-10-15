//!This video took place on google, so this is going to be code to run in the console of google.

//? This is used in the browser for automation

$('.gsfi')

//? This is for writing out a javascript code snippet/ something you'll put into a javascript file.

const searchBar = documents.querySelector('.gsfi')

//? We are going to use the following syntax

$('.gsfi').value = 'What you want to search for'

//? This is for clicking the search button on google, NO ID, NO CLASS, Grab class that encompasses the search button (even if it has multiple buttons)

//? Gives you the entire object, wrapper, margin, "I'm feeling lucky" button, etc. Don't need it all.

$('.jsb')

//? Function run after above code is ran 

$('.jsb').childNodes

//* Returns Node List

//? Code ran after childNodes, pulls the center object out off JSB

$('.jsb').childNodes[0]

//? Run after above code

$('.jsb').childNodes[0].childNodes

//? Run after above code, and call what you want

$('.jsb').childNodes[0].childNodes[0]

//? Run after code above, calls click on whatever you selected (in this case the search button)

$('.jsb').childNodes[0].childNodes[0].click() //* hit enter to run this code.

$('.input')

//! Google changed the code, this is the new code.

//* Input text to the search bar
$('.gLFyf').value = "Javascript tips"; //TODO this adds 'JavaScript Tips' to the search bar

//*Perform search
$(".FPdoLc").childNodes[1].childNodes[1].click() //TODO this performs the search, this is used after the .gLFyf code line.