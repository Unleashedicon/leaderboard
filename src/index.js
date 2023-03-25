import './styles.css';
// API URL
import { getScores, addScore, createGame } from './modules/getscores.js';

// Event listeners
document.getElementById('submitscore').addEventListener('click', (event) => {
  event.preventDefault();
  const name = document.getElementById('name').value;
  const score = document.getElementById('score').value;
  addScore(name, score);
  document.getElementById('scoreinput').reset();
});

document.getElementById('refresh').addEventListener('click', (event) => {
  event.preventDefault();
  getScores();
});

// Initialization
createGame('My cool new game');