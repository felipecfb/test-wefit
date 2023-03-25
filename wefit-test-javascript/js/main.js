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

  if (title === 'Header') {
    const header = row.querySelector('div > .jumbotron');
    const button = header.querySelector('a');

    const buttonStyles = {
      background: 'var(--green)',
      borderColor: 'var(--green)'
    };

    Object.assign(button.style, buttonStyles)

    const styles = {
      textAlign: 'end',
      color: 'var(--white)',
      background: 'var(--gray)',
    };

    Object.assign(header.style, styles);
  };

  if (title === 'Cards') {
    const divCards = row.querySelectorAll('.col-lg-3');

    [...cards].forEach(card => {
      cardsArray.push(card);
      card.remove();
    });

    const buttonAnimals = cardsArray[0].querySelector('.btn');

    const buttonStyles = {
      background: 'var(--green)',
      borderColor: 'var(--green)'
    };

    Object.assign(buttonAnimals.style, buttonStyles)

    const newSequenceCards = [
      cardsArray[3],
      cardsArray[0],
      cardsArray[2],
      cardsArray[1],
    ];

    divCards.forEach(divCard => {
      divCard.append(
        newSequenceCards.shift()
      );
    });
  };
});
