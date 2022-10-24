import ChatList from "../component/ChatList/ChatList";
import Chat from "../component/ChatList/Chat/Chat";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function ChatPage() {
  const chatsArr = [
    {
      recipient: "Alex",
      messages: [
        {
          author: "Alex",
          text: "Привет",
          date: new Date().toLocaleTimeString(),
        },
        {
          author: "You",
          text: "И тебе привет",
          date: new Date().toLocaleTimeString(),
        },
      ],
    },
    {
      recipient: "Jessica",
      messages: [
        {
          author: "Jessica",
          text: "Привет",
          date: new Date().toLocaleTimeString(),
        },
        {
          author: "You",
          text: "И тебе привет",
          date: new Date().toLocaleTimeString(),
        },
      ],
    },
  ];
  const [chats, setChats] = useState([]);
  const { chatId } = useParams();

  useEffect(() => {
    setTimeout(() => {
      setChats(chatsArr);
    }, 1000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <div className="chatsPage">
        <h2>Чаты</h2>
        <ChatList chats={chats} />
        <button
          onClick={() => {
            setChats((prev) => [...prev, chatsArr[0]]);
          }}
        >
          +
        </button>
      </div>
      {chatId && chats[chatId] ? (
        <Chat chat={chats[chatId]} />
      ) : (
        <h2 className="h2chatsPage">Выберите чат</h2>
      )}
    </>
  );
}

export default ChatPage;
