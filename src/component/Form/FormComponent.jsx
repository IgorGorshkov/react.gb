function FormComponent({data, setData, setMessage}) {
    const {author, text} = data;
    const submitForm = (e) => {
        e.preventDefault();
        if (text.length > 0) {
            setMessage(perv => [...perv, {author, text}])
        }
        setData(
            {
                text: '',
                author: ''
            }
        )
    }


    return (
        <form onSubmit={submitForm}>
            <input placeholder='Имя' value={author}
                   onChange={(e) =>
                       setData(perv => ({...perv, author: e.target.value}))
                   }></input>
            <input placeholder='Текст' value={text}
                   onChange={(e) =>
                       setData(perv => ({...perv, text: e.target.value}))
                   }></input>
            <button type='submit'>Отправить</button>
        </form>
    )

}

export default FormComponent




