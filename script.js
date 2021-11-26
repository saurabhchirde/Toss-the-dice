const dice1 = document.querySelector(".dice1");
const dice2 = document.querySelector(".dice2");
const btnToss = document.querySelector(".toss");
const output = document.querySelector(".output");

const tossFun = () => {
  const num1 = Math.trunc(Math.random(6) * 6) + 1;
  const num2 = Math.trunc(Math.random(6) * 6) + 1;

  dice1.innerHTML = `<img src="/Images/${num1}.png" alt="dice-face" />`;
  dice2.innerHTML = `<img src="/Images/${num2}.png" alt="dice-face" />`;
  if (num1 > num2) {
    output.innerText = "Player 1 won !";
  } else if (num1 < num2) {
    output.innerText = "Player 2 won !";
  } else {
    output.innerText = "Draw, try again 🤐 ";
  }
};

btnToss.addEventListener("click", tossFun);
