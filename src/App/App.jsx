import {useState, useEffect} from 'react';
import './App.css';
import FormComponent from "../component/Form/FormComponent";
import Message from "../component/Message/Message";
import HeaderComponent from "../component/HeaderComponent/HeaderComponent";
import {Container, Grid} from "@mui/material";
import * as React from "react";
import Chat from "../component/ChatList/Chat";


function App() {
    const [mode, setMode] = useState(false);
    const changeMode = () => {
        setMode((prev) => !prev);
    };
    const [messageList, setMessageList] = useState([]);
    const [messageBody, setMessageBody] = useState({
        text: '',
        author: ''
    });
    const [chats] = useState([
        {name: 'Name', id: '1'},
        {name: 'Name2', id: '2'},
        {name: 'Name3', id: '3'},
    ])
    const ROBOT_MSG = 'Сообщение получено. Я - робот'

    useEffect(() => {
        if (messageList.length > 0 && messageList.slice(-1)[0].author !== 'Robot') {
            setTimeout(() => {
                setMessageList(perv => [...perv, {text: ROBOT_MSG, author: 'Robot'}])
            }, 1500)
        }

    }, [messageList]);


    return (
        <div className={`App ${mode ? 'app-dark' : 'app-light'}`}>
            <HeaderComponent mode={mode} setMode={changeMode}/>
            <Container maxWidth="lg" sx={{mt: '1rem'}}>
                <Grid container spacing={2}>
                    <Grid item xs={4}>
                        <Chat data={chats} className={`App ${mode ? 'app-dark' : 'app-light'}`}/>
                    </Grid>
                    <Grid item xs={8}>
                        <FormComponent data={messageBody} setData={setMessageBody} setMessage={setMessageList}/>
                        <div>
                            {messageList.map((e, idx) => <Message text={e.text} author={e.author} key={idx}/>)}
                        </div>
                    </Grid>
                </Grid>
            </Container>

        </div>
    );
}

export default App;
