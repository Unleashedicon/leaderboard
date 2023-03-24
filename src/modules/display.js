const display = (lists) => {
  const scorelist = document.querySelector('#scoreboard');
  scorelist.innerHTML = '';
  for (let i = 0; i < lists.length; i += 1) {
    const list = lists[i];
    const scorelistitem = document.createElement('li');
    scorelistitem.classList.add('list-class');
    scorelistitem.innerHTML = `<p>${list.name}: ${list.score}</p>`;
    scorelist.appendChild(scorelistitem);
  }
};

export default display;
