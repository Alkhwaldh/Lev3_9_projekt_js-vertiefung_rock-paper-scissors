const ergebnisse = document.getElementById("ergebnisse");
const playerScore=document.getElementById("playerScore");
const computerScore=document.getElementById("computerScore");
/* Für Computer */
let rock = 1;
let paper = 2;
let scissors = 3;
/*End */
/* für das Scoure */
let pScore = 0;
let cScore = 0;
const updateScore = () => {
    const playerScore = document.getElementById("playerScore");
    const computerScore = document.getElementById("computerScore");
    playerScore.textContent = pScore;
    computerScore.textContent = cScore;
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
    cScore++;
    updateScore();
  } else if (
    (user == rock && comp == scissors) ||
    (user == paper && comp == rock) ||
    (user == scissors && comp == paper)
  ) {
    ergebnisse.innerHTML = "Win 👍" ;
    pScore++;
    updateScore();
  }
}
console.log((Math.floor(Math.random() *3)));
/* Math.floor ==> löscht die alle Kummen */
/*Math.random()*3 ==> 3=>damit kannst du auswählen von bis die nummern sein soll */