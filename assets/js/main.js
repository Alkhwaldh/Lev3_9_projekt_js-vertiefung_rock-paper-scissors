const ergebnisse = document.getElementById("ergebnisse");
const playerScore=document.getElementById("playerScore");
const computerScore=document.getElementById("computerScore");
/* Für Computer */
let rock = 1;
let paper = 2;
let scissors = 3;
/*End */
/* für das Scoure */
let userScore = 0;
let compScore = 0;
const scoreProzess = () => {
    const playerScore = document.getElementById("playerScore");
    const computerScore = document.getElementById("computerScore");
    playerScore.textContent = userScore;
    computerScore.textContent = compScore;
};
/* End */
function play(user) {
  let comp = Math.floor(Math.random()* 3)+1;                       
  console.log(user, comp);
  if (user == comp) {
    ergebnisse.innerHTML = "draw 🙌";
  } else if (
    (user == rock && comp == paper) ||
    (user == paper && comp == scissors) ||
    (user == scissors && comp == rock)
  ) {
    ergebnisse.innerHTML = "lose👎";
    compScore++;
    scoreProzess();
  } else if (
    (user == rock && comp == scissors) ||
    (user == paper && comp == rock) ||
    (user == scissors && comp == paper)
  ) {
    ergebnisse.innerHTML = "Win 👍" ;
    userScore++;
    scoreProzess();
  }
}
    function refresh() {
        window.location.reload();
    }

console.log((Math.floor(Math.random() *3)));
/* Math.floor ==> löscht die alle Kummen */
/*Math.random()*3 ==> 3=>damit kannst du auswählen von bis die nummern sein soll */