import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

export const MessageForm = ({
  text,
  changeHandler,
  keyPressHandler,
  buttonHandler,
  refer,
}) => {
  return (
    <Box sx={{ display: "flex", justifyContent: "space-around" }}>
      <TextField
        inputRef={refer}
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
