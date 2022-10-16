import {useState, useEffect} from 'react';
import './App.css';
import ChangeMode from "../component/ChangeMode/ChangeMode";
import FormComponent from "../component/Form/FormComponent";
import Message from "../component/Message/Message";


function App() {
    const [mode, setMode] = useState(true);
    const changeMode = () => {
        setMode((prev) => !prev);
    };
    const [messageList, setMessageList] = useState([]);
    const [messageBody, setMessageBody] = useState({
        text: '',
        author: ''
    });
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
            <ChangeMode mode={mode} setMode={changeMode}/>
            <FormComponent data={messageBody} setData={setMessageBody} setMessage={setMessageList}/>
            <div>
                {messageList.map((e, idx) => <Message text={e.text} author={e.author} key={idx}/>)}
            </div>
        </div>
    );
}

export default App;
