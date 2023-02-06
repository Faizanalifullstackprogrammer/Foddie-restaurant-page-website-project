const content = document.getElementById('content');

const bannerSection = () => {
  const banner = document.createElement('div');
  banner.classList.add('banner');

  // Left side banner
  const bannerLeft = document.createElement('div');
  bannerLeft.classList.add('banner_left');
  const logo = document.createElement('img');
  logo.classList.add('span');
  logo.setAttribute('src', 'https://res-3.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco/gwnfuhywcvf7jrordlk0');

  const hText = document.createElement('h2');
  hText.innerText = 'Enjoy the delicious food experience';

  bannerLeft.appendChild(logo);
  bannerLeft.appendChild(hText);

  // right banner
  const bannerRight = document.createElement('div');
  bannerRight.classList.add('banner_right');
  const rightImg = document.createElement('img');
  rightImg.setAttribute('src', 'https://www.tasteofhome.com/wp-content/uploads/2019/08/group-bombay-chat-food-includes-golgappapanipuri-shutterstock_1422412163.jpg');
  rightImg.classList.add('img-fluid');
  bannerRight.appendChild(rightImg);

  banner.appendChild(bannerLeft);
  banner.appendChild(bannerRight);
  return banner;
};

const navSection = () => {
  const navBar = document.createElement('nav');
  navBar.classList.add('nav');
  navBar.setAttribute('id', 'nav');

  // Home Item
  const homeBar = document.createElement('button');
  homeBar.classList.add('nav_button');
  homeBar.classList.add('active');
  homeBar.setAttribute('id', 'nav-homeTab1');
  const homeBarLink = document.createElement('a');
  homeBarLink.setAttribute('href', '#nav-homeTab');
  homeBar.innerText = 'Home';
  homeBarLink.appendChild(homeBar);

  // Menu Item
  const menuBar = document.createElement('button');
  menuBar.classList.add('nav_button');
  menuBar.setAttribute('id', 'nav-menu');
  menuBar.innerText = 'Menu';
  const menuBarLink = document.createElement('a');
  menuBarLink.setAttribute('href', '#nav-menu');
  menuBarLink.appendChild(menuBar);

  //  Contact Item
  const contactBar = document.createElement('button');
  contactBar.classList.add('nav_button');
  contactBar.setAttribute('id', 'nav-contact');
  contactBar.innerText = 'Contact';
  const contactBarLink = document.createElement('a');
  contactBarLink.setAttribute('href', '#nav-contact');
  contactBarLink.appendChild(contactBar);

  navBar.appendChild(homeBarLink);
  navBar.appendChild(menuBarLink);
  navBar.appendChild(contactBarLink);

  return navBar;
};


const tabSection = () => {
  const mainTab = document.createElement('div');
  mainTab.classList.add('main_tab');
  mainTab.setAttribute('id', 'sections');

  return mainTab;
};

const setActiveButton = () => {
  const buttons = document.querySelectorAll('.nav_button');

  if (buttons) {
    buttons.forEach( (el, key) => {
      el.addEventListener('click', () => {
        el.classList.add('active');

        buttons.forEach( (ell, els) => {
          if(key !== els) {
            ell.classList.remove('active');
          }
        });
      });
    });
  }
};

const footerSection = () => {
  const footerDiv = document.createElement('footer');
  footerDiv.classList.add('footer');
  const date = new Date().getFullYear();

  const footerText = document.createElement('span');
  footerText.innerHTML = `Copyright &copy; ${date} Divyesh`;
  footerDiv.appendChild(footerText);

  return footerDiv;
};

const initialHomePage = () => {
  content.appendChild(bannerSection());
  content.appendChild(navSection());
  content.appendChild(tabSection());

  setActiveButton();
  content.appendChild(footerSection());
};

export default initialHomePage;