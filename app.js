const letters = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
let missed = 0;
let start= document.querySelector('a');
let phrases = ["crazy", "uneventful", "coding","javascript","python"];
let ul =document.getElementById("phrase")

 start.addEventListener("click", (e) => {
  document.getElementById("overlay").style.visibility = "hidden";
});


const getRandomPhraseAsArray= arr =>{
  let newPhrase = phrases[Math.floor(Math.random()*phrases.length)];
  let phraseGuess = newPhrase.split("");
}

const addPhraseToDisplay= arr =>{
  for (let i = 0; i < arr.length; i += 1) {
    let li = document.createElement("li");                 // Create a <li> node
    let textnode = document.createTextNode(arr[i]);         // Create a text node
    li.appendChild(textnode);                              // Append the text to <li>
    ul.appendChild(li);
}
};

const phraseArray = getRandomPhraseAsArray(phrases);
addPhraseToDisplay(phraseArray);
