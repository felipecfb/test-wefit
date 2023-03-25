rowsArray = [];

const rows = document.querySelectorAll('.row');

rows.forEach(row => rowsArray.push(row));

rowsArray.forEach(row => {
  const title = row.querySelector('h3').textContent;

  if (title === 'Menu') {
    const btnGroup = row.querySelector('div > .btn-group-vertical');
    const buttons = btnGroup.querySelectorAll('button');

    [...buttons].forEach(button => {
      button.style.borderRadius = '4px';
    });

    const styles = {
      'flex-direction': 'row',
      'gap': '5px',
      'white-space': 'nowrap',
    };

    Object.assign(btnGroup.style, styles);
  };
});
