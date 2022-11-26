import * as React from "react";
import { useEffect, useState } from "react";
import { useParams, Navigate } from "react-router-dom";
import { onValue, push } from "firebase/database";

import { MessageList } from "../../components/MessageList/MessageList";
import { FormContainer } from "../../components/Form/FormContainer";
import {
  getMsgsListRefById,
  getMsgsRefById,
  auth,
} from "../../services/firebase";

export function Chat() {
  const { id } = useParams();

  const [messages, setMessages] = useState([]);

  const sendMessage = (text) => {
    push(getMsgsListRefById(id), {
      author: auth.currentUser.email,
      text,
      id: `msg-${Date.now()}`,
    });
  };

  useEffect(() => {
    const unsubscribe = onValue(getMsgsRefById(id), (snapshot) => {
      const val = snapshot.val();
      if (!snapshot.val()?.exists) {
        setMessages(null);
      } else {
        console.log(val?.messageList);
        setMessages(Object.values(val.messageList || {}));
      }
    });

    return unsubscribe;
  }, [id]);
  if (!messages) {
    return <Navigate to="chat" replace />;
  }

  return (
    <div id="messages">
      <MessageList messages={messages} />
      <FormContainer onSubmit={sendMessage} />
    </div>
  );
}
