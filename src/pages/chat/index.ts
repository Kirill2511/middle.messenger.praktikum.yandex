import { Chat } from './chat';
import { connect } from '../../utils/connect';

const withChats = connect((state) => ({
  chatsStore: state.allChats,
  chatId: state.chatId,
  token: state.token,
  currentUser: state.currentUser,
  currentChat: state.chat,
}));

export default withChats(Chat);
