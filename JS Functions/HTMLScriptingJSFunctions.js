//!This is done on google console, however I included it here so I can reference it later on in my programming career

//*Initial code referenced in video

<h2 class="b1">Raise your hand</h2>

//*

document.getElementsByClassName('b1')
//* Returns [h2.b1] I believe it means Header 2, Body 1 but may be wrong.

document.getElementsByClassName('b1')[0];
//* brings <h2 class= "b1">Raise your hand</h2>

document.getElementsByClassName('b1')[0].innerHTML = "Hi there";
//* Refresh page and the "Raise your hand" text changes to "Hi there".

