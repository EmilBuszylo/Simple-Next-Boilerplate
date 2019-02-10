// import React from 'react';
// import styled from 'styled-components';
// import Layout from 'Layout';

// import { initialRequest, fullRequest } from 'Helpers/Request';

import React, { Component } from 'react';
import styled from 'styled-components';
import Layout from 'Layout';

import { initialRequest, fullRequest } from 'Helpers/Request';

const Wrapper = styled.div`
  max-width: 75em;
  margin: 0 auto;
`;

export default class ExamplePage extends Component {
  static getInitialProps({ query }) {
    // example of use initialRequest helper function which get initial data to view
    const response = initialRequest('examplePath', query);
    return response;
  }

  // example of use fullRequest helper function
  clickFunc = () => {
    fullRequest({
      method: 'get',
      url: 'page/1',
    }).then(response => console.log(response));
  };

  render() {
    return (
      <Layout headConfig={{ title: 'example page' }}>
        <Wrapper>
          <h1>Your Example Page</h1>
          <button type="button" onClick={() => exampleGetFunc()}>
            Click
          </button>
        </Wrapper>
      </Layout>
    );
  }
}
