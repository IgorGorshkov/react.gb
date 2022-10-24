import { Link } from "react-router-dom";

function ChatList({ chats }) {
  return (
    <div>
      {chats.map((e, id) => (
        <div key={id} className="chatList">
          <Link to={`${id}`} className="chatListLink">
            {e.recipient}
          </Link>
          <p className="chatDelete">x</p>
        </div>
      ))}
    </div>
  );
}

export default ChatList;
