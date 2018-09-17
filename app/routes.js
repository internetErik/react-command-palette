import App from './app';
import HomePage     from './pages/HomePage';
import FaqPage     from './pages/FaqPage';
import NotFoundPage from './pages/NotFoundPage';

const routes = [{
  component: App,
  routes: [
    {
      path     : '/',
      exact    : true,
      component: HomePage,
    },
    {
      path     : '/faq',
      component: FaqPage,
    },
    {
      path     : '*',
      component: NotFoundPage,
    },
  ],
}];

export default routes;
