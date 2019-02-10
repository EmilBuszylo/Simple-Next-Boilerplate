import React from 'react';
import NextHead from 'next/head';
import PropTypes from 'prop-types';

const Head = ({ headConfig }) => (
  <NextHead>
    <meta charSet="UTF-8" />
    <title>{headConfig.title}</title>
    <meta name="description" content={headConfig.description} />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta property="og:url" content={headConfig.url} />
    <meta property="og:title" content={headConfig.title} />
    <meta property="og:description" content={headConfig.description} />
    <meta name="twitter:site" content={headConfig.url} />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:image" content={headConfig.ogImage} />
    <meta property="og:image" content={headConfig.ogImage} />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
  </NextHead>
);

Head.propTypes = {
  headConfig: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    url: PropTypes.string,
    ogImage: PropTypes.string,
  }),
};

Head.defaultProps = {
  headConfig: {
    title: '',
    description: '',
    url: '',
    ogImage: '',
  },
};

export default Head;
