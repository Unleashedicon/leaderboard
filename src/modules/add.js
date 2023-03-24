const add = (lists, name, score) => {
  const newlist = { name, score };
  lists.push(newlist);
};
export default add;