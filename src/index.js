import './style.css';
import initialHomePage from './home';
import loadMenu from './menu';
import loadContact from './contact';
import homeSection from './main_tab';

initialHomePage();

const tabSections = document.getElementById('sections');

const setSection = (section) => {
  tabSections.innerHTML = '';

  tabSections.append(section);
};


tabSections.appendChild(homeSection());

document.addEventListener('click', (e) => {
  if (e.target && e.target.id === 'nav-menu') {
    const section = loadMenu();
    setSection(section);
  } else if (e.target && e.target.id === 'nav-contact') {
    const section = loadContact();
    setSection(section);
  } else if (e.target && e.target.id === 'nav-homeTab1') {
    const section = homeSection();
    setSection(section);
  }
});
