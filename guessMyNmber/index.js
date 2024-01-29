const check = document.querySelector(".check-btn");
const guess = Number(document.querySelector(".guess").value);
// const hiddenNumber=document.querySelector('.number').textContent
// console.log(hiddenNumber)
let body = document.querySelector(".body");
const scoreValue = document.querySelector(".score-value");
// random number
random_number = Math.floor(Math.random() * 20) + 1;
let number = (document.querySelector(".number").textContent = random_number);
console.log(number, typeof number);

let score = 20;
console.log(score);
console.log(scoreValue);
scoreValue.innerHTML = score;
// adding event listner to check button
check.addEventListener("click", function () {
  let guess = Number(document.querySelector(".guess").value);

  console.log(typeof guess, guess);
  body.className = ".body failure";

  if (!guess) {
    document.querySelector(".message").textContent = "no number!";
  } else if (guess === number) {
    document.querySelector(".message").textContent = "correct  number <..>";
    // document.querySelector('.body').innerHTML='great job';
    // document.querySelector('.body').className='.body success'
    body.className = ".body success";
    number.className="number visible"
  } else if (guess > number) {
    document.querySelector(".message").textContent = "too high ";
    // document.querySelector('.body').className='.body failure';
    score--;
    scoreValue.innerHTML = score;
    console.log(score);
  } else {
    document.querySelector(".message").textContent = "too low";
    // document.querySelector('.body').className='.body failure';
    body.className = ".body failure";
    score--;
    scoreValue.innerHTML = score;
    console.log(score);
  }
});
