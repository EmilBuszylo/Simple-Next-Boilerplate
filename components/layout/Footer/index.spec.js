import React from 'react';
import { shallow } from 'enzyme';

import Component from './index';

const setup = (props = {}, state = null) => {
  const wrapper = shallow(<Component {...props} state={state} />);
  return wrapper;
};

describe('render', () => {
  let appWrapper;
  beforeEach(() => {
    appWrapper = setup();
  });

  it('render component without crashing', () => {
    expect(appWrapper.find('[data-test="page-footer"]').length).toBe(1);
  });
});
