import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import renderRoutes from 'react-router-config/renderRoutes';

import routes from './routes';

// bring in css
import '../scss/site.scss';

render(
  <BrowserRouter>
    { renderRoutes(routes) }
  </BrowserRouter>,
  document.getElementById('app')
);
