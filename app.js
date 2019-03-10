const phrase = document.getElementById('phrase');
const title = document.querySelector('.title');
const button = document.querySelector('.btn__reset');
const heart = document.getElementsByTagName('img');
const list =document.getElementById("phrase");
let missed = 0;
let start= document.querySelector('a');
let phrases = ["constants", "data types", "pseudocode","callback","loops"];


start.addEventListener("click", (e) => {
  document.getElementById("overlay").style.visibility = "hidden";
});


const getRandomPhraseAsArray= arr =>{
  let newPhrase = phrases[Math.floor(Math.random()*phrases.length)];
  let phraseGuess = newPhrase.split("");
  return phraseGuess;
};
const addPhraseToDisplay = arr => {
  for(let i = 0; i < arr.length; i += 1) {
      let li = document.createElement('li');
      li.textContent = arr[i];
      list.appendChild(li);
      if (arr[i] != ' ') {
          li.className = 'letter';
      } else {
          li.className = 'space';
      }
  }
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
function pause(elem){
 document.getElementById("phrase").style.visibility = "hidden";
 document.getElementById("overlay").style.visibility = "visible";
};
function checkWin(elem){
  let letter = document.querySelectorAll('.letter').length;
  let show = document.querySelectorAll('.show').length;
  let overlay =document.getElementById("overlay");
  if (show === letter){
    overlay.className="win";
    setTimeout(pause, 1000);
    title.textContent = 'You won!';
    button.textContent = 'Play again';
    button.onclick = function(){location.reload();};
  }
  else if (missed === 5){
    overlay.className="lose";
    document.getElementById("overlay").style.visibility = "visible";
    title.textContent = 'Sorry you lost ';
    button.textContent = 'Try again';
    button.onclick = function(){location.reload();};
  }
}

qwerty.addEventListener('click',(event)=> {
  let target = event.target;
  const button = target.textContent;
    if(target.type ==="submit"){
      target.classList.add("chosen");
      target.setAttribute('disabled','');
  const letterFound = checkLetter(button);
  checkLetter(button);
  if (letterFound == null){
    for (let i = 0; i < heart.length; i++) {
     heart[missed].src = 'images/lostHeart.png';
     }
    missed +=1;
      }
    }
  checkWin();
 });
