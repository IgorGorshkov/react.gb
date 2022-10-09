import './Messagestyle.css'

function Message(props) {
  const styleP = {
    display: 'flex',
    justifyContent: 'center',
    border: '2px solid blue',
    marginTop: '25px'
  }
  return (
    <div className="App">
      <span style={{color: 'red', fontSize: '24px'}}>Hello from Message component. Inline style</span>
      <p>{props.name}</p>
      <p style={styleP}>Const style</p>
      <div className="heading">
        Style from css file
      </div>
    </div>
  );
}

export default Message;
