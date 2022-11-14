import React, { useCallback, useEffect, useRef, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../store/message/messageAction";
import { useParams } from "react-router-dom";
import { getMessagesList } from "../store/message/messageSelector";
import { getProfile } from "../store/profile/profileSelector";
import shallowEqual from "react-redux/lib/utils/shallowEqual";

export const MessageForm = () => {
  const dispatch = useDispatch();
  const inputRef = useRef(null);

  let chatId = parseInt(useParams().chatId, 10);
  const messages = useSelector(getMessagesList);
  const thisChat = messages[chatId];

  let { showName, userName } = useSelector(getProfile, shallowEqual);
  userName = showName ? userName : "Anonymous";

  const [text, setText] = useState("");
  const changeHandler = (event) => {
    setText(event.target.value);
  };

  const onAddMessage = useCallback(
    (message, author = userName) => {
      dispatch(addMessage(chatId, message, author));
    },
    [chatId, dispatch, userName]
  );

  const keyPressHandler = (event) => {
    if (event.key === "Enter") {
      onAddMessage(text);
      setText("");
    }
  };

  const buttonHandler = () => {
    onAddMessage(text);
    setText("");
    inputRef.current?.focus();
  };

  const createBotComment = useCallback(
    (author) => {
      onAddMessage(`${author}, ваше сообщение прочитано`, "bot");
    },
    [onAddMessage]
  );

  useEffect(() => {
    if (thisChat && thisChat[0].author !== "bot") {
      setTimeout(createBotComment, 1500, thisChat[0].author);
    }
  }, [thisChat, createBotComment, onAddMessage]);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <Box sx={{ display: "flex", justifyContent: "space-around" }}>
      <TextField
        inputRef={inputRef}
        id="outlined-basic"
        label="Введите ваше сообщение"
        variant="filled"
        value={text}
        onChange={changeHandler}
        onKeyPress={keyPressHandler}
      />
      <Button variant="contained" onClick={buttonHandler}>
        Отправить
      </Button>
    </Box>
  );
};
