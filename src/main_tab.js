const homeSection = () => {
  const divHome = document.createElement('div');
  divHome.setAttribute('id', 'nav-homeTab');
  divHome.classList.add('home__nav');

  const headingHome = document.createElement('h1');
  headingHome.innerText = 'Welcome to foody Restaurant!';

  const details = document.createElement('p');
  details.innerText = 'The best Food in your country';

  const logo = document.createElement('img');
  logo.setAttribute('src', 'https://res-3.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco/gwnfuhywcvf7jrordlk0');

  const chefImage = document.createElement('img');
  chefImage.classList.add('chef__img');
  chefImage.setAttribute('src', 'https://www.kindpng.com/picc/m/2-20401_chef-girl-girl-chef-hd-logo-hd-png.png');

  divHome.appendChild(logo);
  divHome.appendChild(headingHome);
  divHome.appendChild(chefImage);
  divHome.appendChild(details);

  return divHome;
};

export default homeSection;