import React from 'react';
import PropTypes from 'prop-types';
import renderRoutes from 'react-router-config/renderRoutes';
import { Link } from 'react-router-dom';

import CommandPalette from './containers/CommandPalette';

export default class App extends React.Component {
  render() {
    const { route } = this.props;
    return (
    <section>
    <CommandPalette />
    <div>
      <Link to="/">Home</Link>
      <Link to="/faq">FAQ</Link>
    </div>
    { renderRoutes(route.routes) }
    </section>
    )
  }
}
