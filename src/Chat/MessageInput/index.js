import { connect } from 'react-redux';
import MessageInput from './MessageInput';
import { updateInput, sendMessage, switchInputMode } from './actions';

const mapStateToProps = ({ chat }) => ({
  input: chat.input,
  inputMode: chat.inputMode,
});

const mapDispatchToProps = {
  updateInput,
  sendMessage,
  switchInputMode,
};

export default connect(mapStateToProps, mapDispatchToProps)(MessageInput);
