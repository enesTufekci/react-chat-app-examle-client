/* eslint-disable object-curly-newline */
import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import MessageList from '../MessageList';

Enzyme.configure({ adapter: new Adapter() });

const user1 = { nick: 'enes', id: 1 };
const user2 = { nick: 'john', id: 2 };
const messages = [
  { text: 'text 1', uuid: 'message-1', type: 'normal', user: user1 },
  { text: 'text 2', uuid: 'message-2', type: 'think', user: user1 },
  { text: 'text 3', uuid: 'message-3', type: 'normal', user: user1 },
  { text: 'text 4', uuid: 'message-4', type: 'think', user: user2 },
  { text: 'text 5', uuid: 'message-5', type: 'normal', user: user2 },
  { text: 'text 6', uuid: 'message-6', type: 'normal', user: user1 },
  { text: 'text 7', uuid: 'message-7', type: 'normal', user: user2 },
];

describe('<MessageList />', () => {
  const wrapper = shallow(<MessageList messages={messages} user={user1} />);
  it('should render messages correctly', () => {
    expect(wrapper.find('.message')).toHaveLength(messages.length);
  });
  it('should render user titles correctly', () => {
    expect(wrapper.find('.message-title')).toHaveLength(4);
    expect(wrapper.find('.message-title').first().text()).toBe('You');
    expect(wrapper.find('.message-title').last().text()).toBe(user2.nick);
  });
  it('should render title directions correctly', () => {
    expect(wrapper.find('.message-title').last().hasClass('left')).toBe(true);
  });
  it('should render message directions correctly', () => {
    expect(wrapper.find('.message').last().hasClass('left')).toBe(true);
    expect(wrapper.find('.message').first().hasClass('left')).toBe(false);
  });
  it('should render message text correctly', () => {
    expect(wrapper.find('.message').first().props().dangerouslySetInnerHTML)
      .toEqual({ __html: messages[0].text });
    expect(wrapper.find('.message').at(2).props().dangerouslySetInnerHTML)
      .toEqual({ __html: messages[2].text });
    expect(wrapper.find('.message').at(5).props().dangerouslySetInnerHTML)
      .toEqual({ __html: messages[5].text });
  });
  it('should render message types correctly', () => {
    expect(wrapper.find('.message').first().hasClass(messages[0].type)).toBe(true);
    expect(wrapper.find('.message').at(1).hasClass(messages[1].type)).toBe(true);
    expect(wrapper.find('.message').at(4).hasClass(messages[4].type)).toBe(true);
    expect(wrapper.find('.message').last(1).hasClass(messages[messages.length - 1].type)).toBe(true);
  });
});
