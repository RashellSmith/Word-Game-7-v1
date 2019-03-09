const qwerty = document.getElementById('qwerty');
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
  return phraseGuess;
}

const addPhraseToDisplay= arr =>{
  for (let i = 0; i < arr.length; i += 1) {
    let li = document.createElement("li");                 // Create a <li> node
    let textnode = document.createTextNode(arr[i]);         // Create a text node
    if ( arr[i]!= ""){
    li.appendChild(textnode);                              // Append the text to <li>
    ul.appendChild(li).classList.add("letter");
  }
};
};
const phraseArray = getRandomPhraseAsArray(phrases);
addPhraseToDisplay(phraseArray);

function checkLetter(elem) {
  const letters = document.querySelectorAll('.letter');
  let letterFound = null;
  letters.forEach(letter => {
    if (elem === letter.textContent){
      letterFound = true;
      letter.classList.add("show");
    }
  });
  return letterFound;
}
function checkWin(elem){
  let letter = document.querySelectorAll('.letter').length;
  let show = document.querySelectorAll('.show').length;
  let overlay =document.getElementById("overlay");
  if (show === letter){
    overlay.className ="win";
  }
  else if (missed === 5){
    overlay.className="lose";
  }
};
qwerty.addEventListener('click',(event)=> {
  let target = event.target;
  const button = target.textContent;
    if(target.type ==="submit"){
      target.classList.add("chosen");
      target.setAttribute('disabled','');
  const letterFound = checkLetter(button);
  checkLetter(button);
  if (letterFound == null){
    missed +=1;
      };
    }
  checkWin();
 });
