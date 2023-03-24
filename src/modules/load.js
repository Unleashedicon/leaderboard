const lists = [
  { name: 'Frank', score: 40 },
  { name: 'Kelvin', score: 80 },
  { name: 'Tems', score: 100 },
  { name: 'Rema', score: 50 },
  { name: 'Marlene', score: 70 },
];

const load = () => JSON.parse(localStorage.getItem('lists')) || lists;
export default load;