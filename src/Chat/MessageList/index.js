import { connect } from 'react-redux';
import MessageList from './MessageList';

const mapStateToProps = ({ chat, app }) => ({
  user: app.user,
  messages: chat.messages,
});

export default connect(mapStateToProps, null)(MessageList);
