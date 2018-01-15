import React from 'react';
import PropTypes from 'prop-types';

const UserList = ({ user, users }) => {
  const userList = users.filter(u => u.id !== user.id)
    .map(u => (
      <div className="user-list-item" key={u.id}>
        <div className="user-name">
          { u.nick }
        </div>
      </div>
    ));
  return (
    <div className="user-list">
      <div className="user-list-item" key={user.id}>
        <div className="user-name">
          { user.nick } (You)
        </div>
      </div>
      <p>Online Users</p>
      { userList }
    </div>
  );
};


UserList.propTypes = {
  user: PropTypes.object.isRequired,
  users: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default UserList;
