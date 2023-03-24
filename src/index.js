import './styles.css';
import Scorelist from './modules/list.js';

const scoreboard = new Scorelist();

scoreboard.display();

const submitBtn = document.querySelector('#submitscore');
submitBtn.addEventListener('click', (event) => {
  const nameinput = document.querySelector('#name');
  const scoreinput = document.querySelector('#score');
  const name = nameinput.value;
  const score = scoreinput.value;
  scoreboard.add(name, score);
  event.preventDefault();
  nameinput.value = '';
  scoreinput.value = '';
});

const refreshbtn = document.querySelector('#refresh');
refreshbtn.addEventListener('click', (event) => {
  scoreboard.refresh();
  event.preventDefault();
});
