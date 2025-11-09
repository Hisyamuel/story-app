import HomePage from '../pages/home/home-page.js';
import AboutPage from '../pages/about/about-page.js';
import LoginPage from '../pages/login/login-page.js';
import RegisterPage from '../pages/register/register-page.js';
import AddStoryPage from '../pages/add-story/add-story-page.js';
import FavoritesPage from '../pages/favorites/favorites-page.js';

const routes = {
  '/': HomePage,
  '/home': HomePage,
  '/about': AboutPage,
  '/login': LoginPage,
  '/register': RegisterPage,
  '/add-story': AddStoryPage,
  '/favorites': FavoritesPage,
};

export default routes;