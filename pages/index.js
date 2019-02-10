import React, { Component } from 'react';
import styled from 'styled-components';
import Layout from 'Layout';

import { initialRequest } from 'Helpers/Request';

const Wrapper = styled.div`
  max-width: 75em;
  margin: 0 auto;
`;

export default class HomePage extends Component {
  static getInitialProps({ query }) {
    // example of use initialRequest helper function which get initial data to view
    const response = initialRequest('/home-page');
    return response;
  }
  render() {
    const { data } = this.props;
    console.log(this.props);
    return (
      <Layout headConfig={{ title: 'Home page' }}>
        <Wrapper>
          <h1>Example home page</h1>
        </Wrapper>
      </Layout>
    );
  }
}
