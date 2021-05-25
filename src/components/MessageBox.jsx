import {React, useState} from 'react'

export default function MessageBox () {
    const [message, setMessage] = useState('')
    function handleSubmit(e) {
        e.preventDefault()
        console.log(message)
        setMessage('')
    }
    return (
        <form className="message-box">
            <input type="text" className="message-input" placeholder="Say something..." value={message} onChange={e=>setMessage(e.target.value)}/>

            <button type="submit" className="message-send" onSubmit={e=>handleSubmit(e)}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="64" height="64">
                    <path fill="none" d="M0 0h24v24H0z"/>
                    <path d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"/>
                </svg>
            </button>
        </form>
    )
}