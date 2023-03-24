const refresh = (lists) => {
  const taskList = document.getElementById('scoreboard');
  const completedLists = taskList.querySelectorAll('.list-class');

  completedLists.forEach((list) => {
    const li = list.closest('li');
    const { index } = li.dataset;
    lists.splice(index, 1);
    li.remove();
  });
};

export default refresh;
