function ChangeMode({mode, setMode}) {
    return (
        <button onClick={setMode}>{mode ? 'Light Mode' : 'Dark Mode'}</button>
    )
}

export default ChangeMode