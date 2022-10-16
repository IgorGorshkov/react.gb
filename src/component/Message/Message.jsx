function Message({author, text}) {
    return (
        <div>
            <hr/>
            <h3>{author}</h3>
            <p>{text}</p>
            <hr/>
        </div>
    )
}

export default Message