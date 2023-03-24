const save = (lists) => {
  localStorage.setItem('lists', JSON.stringify(lists));
};
export default save;