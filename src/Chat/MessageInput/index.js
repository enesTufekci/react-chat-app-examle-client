import { connect } from 'react-redux';
import MessageInput from './MessageInput';
import { updateInput, sendMessage } from './actions';

const mapStateToProps = ({ chat }) => ({
  input: chat.input,
});

const mapDispatchToProps = {
  updateInput,
  sendMessage,
};

export default connect(mapStateToProps, mapDispatchToProps)(MessageInput);
