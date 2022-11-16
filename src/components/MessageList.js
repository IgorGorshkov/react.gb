import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import InboxIcon from "@mui/icons-material/Inbox";
import ListItemText from "@mui/material/ListItemText";
import List from "@mui/material/List";
import React from "react";
import Box from "@mui/material/Box";
import { shallowEqual, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getMessagesList } from "../store/message/messageSelector";

export const MessageList = () => {
  let id = parseInt(useParams().chatId, 10);
  const messages = useSelector(getMessagesList, shallowEqual);

  const thisChat = messages[id];

  if (!(id in messages)) {
    return <p>Нет сообщений</p>;
  }

  return (
    <List>
      {thisChat.map((message) => {
        return (
          <ListItem disablePadding key={message.id}>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <Box sx={{ flexDirection: "column" }}>
              <ListItemText primary={message.author} />
              <ListItemText primary={message.text} />
            </Box>
          </ListItem>
        );
      })}
    </List>
  );
};
