function Chat({ chat }) {
  console.log(chat.messages);
  return (
    <div className="chatItems">
      {chat.messages.map((e, id) => (
        <div key={id} className="messageItem">
          <h4 className="messageHeading">{e.author}</h4>
          <p>{e.text}</p>
          <p>{e.date}</p>
        </div>
      ))}
    </div>
  );
}
export default Chat;
