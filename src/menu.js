import foodLists from './foodList.json';
import foodItem from './foodItem';

const loadMenu = () => {
  // setting div
  const divMenu = document.createElement('div');
  divMenu.classList.add('menu__tab');

  // Set H1
  const menuHeading = document.createElement('h1');
  menuHeading.innerText = 'Menu';
  divMenu.prepend(menuHeading);

  const divCard = document.createElement('div');
  divCard.classList.add('card__div');

  foodLists.forEach((item) => {
    divCard.appendChild(foodItem(item));
  });

  divMenu.appendChild(divCard);

  return divMenu;
};

export default loadMenu;