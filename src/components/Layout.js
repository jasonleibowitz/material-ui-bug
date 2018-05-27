import React from 'react';
import PropTypes from 'prop-types';
import { Container } from 'styles/common';

// services
import withRoot from '../withRoot';

// components
import NavBar from './NavBar';
// import Logo from './Logo';

function Layout(props) {
  return (
    <React.Fragment>
      <NavBar />
      <Container>
        {props.children}
      </Container>
    </React.Fragment>
  );
}

Layout.propTypes = {
  children: PropTypes.node,
}

Layout.defaultProps = {
  children: null,
}

export default withRoot(Layout);
