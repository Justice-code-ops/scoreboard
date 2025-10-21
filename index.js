let homescore = 0;
let guestscore = 0;

let homeScoreEl = document.getElementById("home-score");
let guestScoreEl =  document.getElementById("guest-score");

function score(team, score) {
   if (team === "home" && score === 1) {
      homescore += 1
      homeScoreEl.textContent = homescore;
   } else if (team === "home" && score === 2) {
      homescore += 2
      homeScoreEl.textContent = homescore;
   } else if (team === "home" && score === 3) {
      homescore += 3
      homeScoreEl.textContent = homescore;
   } else if (team === "guest" && score === 1) {
      guestscore += 1
      guestScoreEl.textContent = guestscore
   } else if (team === "guest" &&  score === 2) {
      guestscore += 2
      guestScoreEl.textContent = guestscore
   } else if (team === "guest" && score ===  3) {
      guestscore += 3
      guestScoreEl.textContent = guestscore
   }
}

function reset() {
   homescore = 0
   guestscore = 0

   homeScoreEl.textContent = homescore
   guestScoreEl.textContent = guestscore
}