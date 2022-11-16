import React from "react";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";

export const ChatCreateForm = ({
  handleOpen,
  visible,
  handleClose,
  newChatName,
  handleChange,
  keyPressHandler,
  onAddChat,
}) => {
  return (
    <div>
      <Button variant="contained" className="add-chat" onClick={handleOpen}>
        Add Chat
      </Button>
      <Dialog open={visible} onClose={handleClose}>
        <DialogTitle>Please enter a name for new chat</DialogTitle>
        <TextField
          autoFocus
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
