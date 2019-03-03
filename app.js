const letters = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
let missed = 0;
let start= document.querySelector('a');
let phrases = ["crazy", "uneventful", "coding","javascript","python"];

 start.addEventListener("click", (e) => {
  document.getElementById("overlay").style.visibility = "hidden";
  function getRandomPhraseAsArray(arr){
    let newPhrase = phrases[Math.floor(Math.random()*phrases.length)];
    let phraseGuess = newPhrase.split("");
    // console.log(phraseGuess);
  }
  // getRandomPhraseAsArray(phrases);

  function addPhraseToDisplay(arr){
    for (i = 0; i < phrases.length; i++) {
      var node = document.createElement("LI");                 // Create a <li> node
      var textnode = document.createTextNode(phrases[i]);         // Create a text node
      node.appendChild(textnode);                              // Append the text to <li>
      document.getElementById("phrase").appendChild(node);
}
const phraseArray = getRandomPhraseAsArray(phrases);
addPhrasetoDisplay(phraseArray);
    // do stuff any arr that is passed in, and add to `#phrase ul`
}

});
