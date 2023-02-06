const foodItem = ({ img, price, name }) => {
  const foody = document.createElement('div');
  foody.classList.add('foody');

  const image = document.createElement('img');
  image.setAttribute('src', img);

  const rightDiv = document.createElement('div');
  rightDiv.classList.add('right_div');

  const nameTitle = document.createElement('h4');
  nameTitle.innerText = name;
  rightDiv.appendChild(nameTitle);

  const description = document.createElement('p');
  description.innerText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit... ';
  rightDiv.appendChild(description);

  const prc = document.createElement('span');
  prc.innerText = price;
  rightDiv.appendChild(prc);


  foody.appendChild(image);
  foody.appendChild(rightDiv);

  return foody;
};

export default foodItem;