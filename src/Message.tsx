import { useState } from 'react';

export default function Message() {
    const [isSent, setIsSent] = useState(false);
    const [message, setMessage] = useState('');
    if (isSent) {
        return <h1>Your message is on its way!</h1>
    }
    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            setIsSent(true);
            sendMessage(message);
        }}>
            <textarea
                placeholder="Write a message..."
                value={message}
                onChange={e => setMessage(e.target.value)}
            />
            <br /><br />
            <button type="submit">Send</button>
        </form>
    );
}

function sendMessage(message: string) {
    // ...
    alert(`You wrote '${message}'!`)
}
