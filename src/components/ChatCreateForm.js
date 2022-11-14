import React, { useState } from "react";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import { addChat } from "../store/chat/chatActions";
import { useDispatch } from "react-redux";

export const ChatCreateForm = () => {
  const dispatch = useDispatch();

  const [visible, setVisible] = useState(false);
  const [newChatName, setNewChatName] = useState("");

  const handleChange = (e) => setNewChatName(e.target.value);

  const handleClose = () => setVisible(false);
  const handleOpen = () => {
    setVisible(true);
  };

  const onAddChat = () => {
    dispatch(addChat(newChatName));
    setNewChatName("");
    handleClose();
  };

  const keyPressHandler = (e) => {
    if (e.key === "Enter") {
      onAddChat();
    }
  };

  return (
    <div>
      <Button variant="contained" onClick={handleOpen}>
        Add Chat
      </Button>
      <Dialog open={visible} onClose={handleClose}>
        <DialogTitle>Please enter a name for new chat</DialogTitle>
        <TextField
          value={newChatName}
          onChange={handleChange}
          onKeyPress={keyPressHandler}
        />
        <Button variant="contained" onClick={onAddChat} disabled={!newChatName}>
          Submit
        </Button>
      </Dialog>
    </div>
  );
};
