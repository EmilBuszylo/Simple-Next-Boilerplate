import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

import Head from 'Components/utils/Head';
import Header from 'Components/layout/Header';
import Footer from 'Components/layout/Footer';

const theme = {};

const Layout = ({ children, headConfig }) => {
  return (
    <Fragment>
      <Head headConfig={headConfig} />
      <Header />
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
      <Footer />
    </Fragment>
  );
};

Layout.propTypes = {
  headConfig: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    url: PropTypes.string,
    ogImage: PropTypes.string,
  }),
};

Layout.defaultProps = {
  headConfig: {},
};

export default Layout;
