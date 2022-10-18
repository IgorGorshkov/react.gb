import ListItem from "@mui/material/ListItem";
import List from "@mui/material/List";
import * as React from "react";

function Chat({data}) {
    const {name, id} = data
    return (
        <List sx={{width: '100%', maxWidth: 360}}>
            {data.map((el) => {
                return (
                    <ListItem alignItems="flex-start" key={el.id}>
                        {el.id + ':'} {el.name}
                    </ListItem>
                )
            })}
        </List>
    )
}

export default Chat