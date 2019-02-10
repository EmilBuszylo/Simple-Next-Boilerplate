import React, { Component } from 'react';
import styled from 'styled-components';
import Layout from 'Layout';

import { initialRequest } from 'Helpers/Request';

const Wrapper = styled.div`
  max-width: 75em;
  margin: 0 auto;
`;

export default class PostPage extends Component {
  static getInitialProps({ query }) {
    // example of use initialRequest helper function which get initial data to view.
    // Query in this example is our slug which was declared in routes.js
    const response = initialRequest('page', query);
    return response;
  }
  render() {
    return (
      <Layout headConfig={{ title: 'post page' }}>
        <Wrapper>
          <h1>Example post page</h1>
        </Wrapper>
      </Layout>
    );
  }
}
