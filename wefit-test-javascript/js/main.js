rowsArray = [];

const rows = document.querySelectorAll('.row');

rows.forEach(row => rowsArray.push(row));

rowsArray.forEach(row => {
  const title = row.querySelector('h3').textContent;

  console.log(title);
});
