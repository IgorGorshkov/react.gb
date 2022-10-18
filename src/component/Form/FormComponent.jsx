import {Button, TextField} from "@mui/material";
import {useEffect, useRef} from 'react';
import './Form.css'
import React from 'react'

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
    const ref = useRef(null);
    useEffect(() => {
        ref.current.focus()
        console.log(ref.current)
    }, [])


    return (
        <div className='wrapper'>
            <form onSubmit={submitForm}>
                <TextField
                    autoFocus={true}
                    ref={ref}
                    id="filled-basic"
                    label="Имя"
                    variant="filled"
                    value={author}
                    onChange={(e) =>
                        setData(perv => ({...perv, author: e.target.value}))
                    }
                    className='input'/>

                <TextField
                    id="filled-basic"
                    label="Текст"
                    variant="filled"
                    value={text}
                    onChange={(e) =>
                        setData(perv => ({...perv, text: e.target.value}))
                    }
                    className='input'/>
                <Button
                    variant="contained"
                    type='submit'
                    className='button'
                >Отправить</Button>
            </form>
        </div>
    )

}

export default FormComponent




