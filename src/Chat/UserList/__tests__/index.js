import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import UserList from '../UserList';

Enzyme.configure({ adapter: new Adapter() });

const user = {
  nick: 'user1',
  id: 1,
};
const users = [
  user,
  {
    nick: 'user2',
    id: 2,
  },
  {
    nick: 'user3',
    id: 3,
  },
];

describe('<UserList />', () => {
  it('should render user list correctly', () => {
    const wrapper = shallow(<UserList users={users} user={user} />);
    expect(wrapper.find('.user-list-item')).toHaveLength(3);
    expect(wrapper.find('.user-list-item').first().text()).toEqual(`${user.nick} (You)`);
  });
});
