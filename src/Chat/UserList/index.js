import { connect } from 'react-redux';
import UserList from './UserList';

const mapStateToProps = ({ app }) => ({
  user: app.user,
  users: app.users,
});

export default connect(mapStateToProps, null)(UserList);
