const apiUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/';

let gameId;

const getScores = async () => {
  try {
    const response = await fetch(`${apiUrl}games/${gameId}/scores/`);
    const data = await response.json();
    const scoreboard = document.getElementById('scoreboard');
    scoreboard.innerHTML = '';
    data.result.forEach((score) => {
      const li = document.createElement('li');
      li.textContent = `${score.user}: ${score.score}`;
      scoreboard.appendChild(li);
    });
  } catch (error) {
    console.error(error);
  }
};

const addScore = async (name, score) => {
  try {
    const response = await fetch(`${apiUrl}games/${gameId}/scores/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user: name,
        score,
      }),
    });
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
};

const createGame = async (name) => {
  try {
    const response = await fetch(`${apiUrl}games/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
      }),
    });
    const data = await response.json();
    gameId = data.result.substring(11, 33);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
};

export { getScores, addScore, createGame };
