import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import MessageInput from '../MessageInput';
import { updateInput, sendMessage, switchInputMode } from '../actions';

const props = {
  updateInput,
  sendMessage,
  switchInputMode,
};

Enzyme.configure({ adapter: new Adapter() });

describe('<MessageInput />', () => {
  const wrapper = shallow(<MessageInput {...props} />);
  it('should contain textarea with props', () => {
    expect(wrapper.find('textarea')).toHaveLength(1);
    expect(wrapper.find('textarea').prop('autoFocus')).toBe(true);
    expect(wrapper.find('textarea').prop('type')).toEqual('text');
  });
});
