import '../styles/style.css'
import { getFooter, getHeader } from './components';
import { home } from './pages';
import singup from './pages/signup';

function main() {
  // load the header
  const headerContainer = document.getElementById('header');
  const headerElements = getHeader();
  headerContainer.innerHTML = headerElements;
  // load the main content here
  const mainContent = document.getElementById('main-content');
  const path = document.location.pathname;
  switch(path) {
    case '/':
      mainContent.innerHTML = home();
      break;
    case '/signup':
      mainContent.innerHTML = singup();
  }
  // load the footer content
  const footerContainer = document.getElementById('footer');
  const footerElements = getFooter();
  footerContainer.innerHTML = footerElements;
}


main();
