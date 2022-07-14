'use strict';
let player1 = document.querySelector('player--0');
let player2 = document.querySelector('player--1');
let current1 = document.querySelector('#current--0');
let current2 = document.querySelector('#current--1');
let score1 = document.querySelector('#score--0');
let score2 = document.querySelector('#score--1');
const dice1 = document.querySelector('.dice');

dice1.classList.toggle('hidden');

let activePlayer = 0;

let score = 0;
let bothScores = [0, 0];

document.querySelector('.btn--roll').addEventListener('click', function () {
  let num = Math.trunc(Math.random() * 6) + 1;
  if (num === 1) {
    document.querySelector('.dice').src = `dice-${num}.png`;
    document.querySelector(`#current--${activePlayer}`).textContent = 0;
    if (activePlayer === 0) {
      //   player1.classList.toggle('player--active');
      //   player2.classList.toggle('player--active');
      //   bothScores[0] = score;
      score = 0;
      activePlayer = 1;
    } else if (activePlayer === 1) {
      //   player2.classList.toggle('player--active');
      //   player1.classList.toggle('player--active');
      //   bothScores[1] = score;
      score = 0;
      activePlayer = 0;
    }
  } else {
    console.log(num);
    score += num;
    document.querySelector('.dice').src = `dice-${num}.png`;
    document.querySelector(`#current--${activePlayer}`).textContent = score;
  }
});

document.querySelector('.btn--hold').addEventListener('click', function () {
  if (activePlayer === 0) {
    bothScores[0] += score;
    score = 0;
    score1.textContent = bothScores[0];
    if (score1.textContent > 100) {
      document.querySelector('#name--0').textContent = 'PLAYER 1 WINS 🎊🎉';
      document.querySelector('#name--1').textContent = 'PLAYER 2 LOSE 😫👌';
      score = 0;
      bothScores = [0, 0];
      activePlayer = 0;
      current1.textContent = 0;
      current2.textContent = 0;
      dice1.classList.add('hidden');
    }

    // activePlayer = 1;
    current1.textContent = 0;
  } else if (activePlayer === 1) {
    bothScores[1] += score;
    score = 0;
    score2.textContent = bothScores[1];
    if (score2.textContent > 100) {
      document.querySelector('#name--1').textContent = 'PLAYER 2 WINS 🎊🎉';
      document.querySelector('#name--0').textContent = 'PLAYER 1 LOSE 😫👌';
      score = 0;
      bothScores = [0, 0];
      activePlayer = 0;
      current1.textContent = 0;
      current2.textContent = 0;
      dice1.classList.add('hidden');
    }
    // activePlayer = 0;
    current2.textContent = 0;
  }
});

document.querySelector('.btn--new').addEventListener('click', function () {
  score = 0;
  bothScores = [0, 0];
  activePlayer = 0;
  score1.textContent = 0;
  score2.textContent = 0;
  current1.textContent = 0;
  current2.textContent = 0;
  document.querySelector('#name--1').textContent = 'PLAYER 2';
  document.querySelector('#name--0').textContent = 'PLAYER 1';
  dice1.classList.add('hidden');
});

//   if (num === 1) {
//     document.querySelector('.dice').src = 'dice-1.png';
//     if (activePlayer === 0) {
//       activePlayer = 1;
//     } else if (activePlayer === 1) {
//       activePlayer = 0;
//     }
//   } else if (num === 2) {
//     Number(document.querySelector(`#current-${activePlayer}`).textContent) =
//       Number(document.querySelector(`#current-${activePlayer}`).textContent) +
//       num;
//     document.querySelector('.dice').src = 'dice-2.png';
//   } else if (num === 3) {
//     Number(document.querySelector(`#current-${activePlayer}`).textContent) =
//       Number(document.querySelector(`#current-${activePlayer}`).textContent) +
//       num;
//     document.querySelector('.dice').src = 'dice-3.png';
//   } else if (num === 4) {
//     Number(document.querySelector(`#current-${activePlayer}`).textContent) =
//       Number(document.querySelector(`#current-${activePlayer}`).textContent) +
//       num;
//     document.querySelector('.dice').src = 'dice-4.png';
//   } else if (num === 5) {
//     Number(document.querySelector(`#current-${activePlayer}`).textContent) =
//       Number(document.querySelector(`#current-${activePlayer}`).textContent) +
//       num;
//     document.querySelector('.dice').src = 'dice-5.png';
//   } else if (num === 6) {
//     document.querySelector(`#current-${activePlayer}`).textContent =
//       Number(document.querySelector(`#current-${activePlayer}`).textContent) +
//       num;
//     document.querySelector('.dice').src = 'dice-6.png';
//   }
