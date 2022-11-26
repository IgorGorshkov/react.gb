import { MessageWithThemeContext } from "../Message/Message";

export const MessageList = ({ messages }) =>
  messages.map((msg) => (
    <MessageWithThemeContext key={msg.id} text={msg.text} author={msg.author} />
  ));
