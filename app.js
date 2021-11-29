let userScore = 0;
let computerScore = 0;

const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice() {
  const choices = ["r", "p", "s"];
  const randomNumber = Math.floor(Math.random() * choices.length);
  return choices[randomNumber];
}

function convertToImg(letter) {
  if (letter === "r")
    return `<div class="choice" id="rock">
        <img src="images/rock.png " alt="" />
      </div>`;
  if (letter === "p")
    return ` <div class="choice" id="paper">
        <img src="images/paper.png" alt="" />
      </div>`;
  return `<div class="choice" id="scissors">
        <img src="images/scissors.png" alt="" />
      </div>`;
}

function win(user, computer) {
  const smallUserWord = "user".fontsize(3).sup();
  const smallCompWord = "comp".fontsize(3).sup();
  const user_div = document.getElementById(user);
  userScore++;
  userScore_span.innerText = userScore;
  computerScore_span.innerText = computerScore;
  result_p.innerHTML = ` ${convertToImg(user)} vs. ${convertToImg(
    computer
  )} </br> </br>  You win.`;
  user_div.classList.add("green-glow");
  setTimeout(function () {
    user_div.classList.remove("green-glow");
  }, 500);
}

function lose(user, computer) {
  const smallUserWord = "user".fontsize(3).sup();
  const smallCompWord = "comp".fontsize(3).sup();
  const user_div = document.getElementById(user);

  computerScore++;
  userScore_span.innerText = userScore;
  computerScore_span.innerText = computerScore;
  result_p.innerHTML = ` ${convertToImg(user)} vs. ${convertToImg(
    computer
  )} </br> </br> You lost.`;
  user_div.classList.add("red-glow");
  setTimeout(function () {
    user_div.classList.remove("red-glow");
  }, 500);
}
function draw(user, computer) {
  const smallUserWord = "user".fontsize(3).sup();
  const smallCompWord = "comp".fontsize(3).sup();
  const user_div = document.getElementById(user);
  result_p.innerHTML = ` ${convertToImg(user)} vs. ${convertToImg(
    computer
  )} </br> </br> Draw.`;
  user_div.classList.add("gray-glow");
  setTimeout(function () {
    user_div.classList.remove("gray-glow");
  }, 500);
}

function game(userChoice) {
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice) {
    case "rs":
    case "pr":
    case "sp":
      win(userChoice, computerChoice);
      break;
    case "rp":
    case "ps":
    case "sr":
      lose(userChoice, computerChoice);
      break;
    case "rr":
    case "pp":
    case "ss":
      draw(userChoice, computerChoice);
      break;
  }
}

function main() {
  rock_div.addEventListener("click", function () {
    game("r");
  });
  paper_div.addEventListener("click", function () {
    game("p");
  });
  scissors_div.addEventListener("click", function () {
    game("s");
  });
}

main();
