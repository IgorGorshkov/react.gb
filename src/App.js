import Message from './components/message/Message';
import './App.css'

function App() {
  const msgProps = 'AppProps in Message component'
  
  return (
    <div className="App">
      <p>App component</p>
      <Message name={msgProps ? msgProps : 'New message'}/>
    </div>
  );
}

export default App;
