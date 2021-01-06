import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import './ChatScreen.css';

function ChatScreen() {
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([
        {
            name: 'Agnes',
            image: 'https://scontent.flos3-2.fna.fbcdn.net/v/t1.0-9/121653521_405840733912662_851293843220777304_n.jpg?_nc_cat=108&ccb=2&_nc_sid=09cbfe&_nc_eui2=AeFL1OdI3wO3BJ18NJVrEUPnkwxJgj0BGG-TDEmCPQEYb0qRdlV9auIcD9Bdmxh-KYWY_Ao5hGlfIAq4QjBNu1lb&_nc_ohc=vT6iLGdoDL4AX9VW1l5&_nc_ht=scontent.flos3-2.fna&oh=c3397b3dbc5d1d2e0c7d1049d036b51f&oe=6018C138',
            message: 'Whats up'
        },
        {
            name: 'Agnes',
            image: 'https://scontent.flos3-2.fna.fbcdn.net/v/t1.0-9/121653521_405840733912662_851293843220777304_n.jpg?_nc_cat=108&ccb=2&_nc_sid=09cbfe&_nc_eui2=AeFL1OdI3wO3BJ18NJVrEUPnkwxJgj0BGG-TDEmCPQEYb0qRdlV9auIcD9Bdmxh-KYWY_Ao5hGlfIAq4QjBNu1lb&_nc_ohc=vT6iLGdoDL4AX9VW1l5&_nc_ht=scontent.flos3-2.fna&oh=c3397b3dbc5d1d2e0c7d1049d036b51f&oe=6018C138',
            message: 'am fine'
        },
        {
            message: 'what are you up to today'
        }
    ])

    const handleSend = (e) => {
        e.preventDefault();
        
        setMessages([...messages, { message: input }]);
        setInput("");
    }

    return (
        <div className="chatScreen">
            <p className="chartScreen__timestamp">YOU MATCHED WITH MENA ON 5/01/2021</p>
            {messages.map(message => (
                message.name ? (
                     <div className="chartScreen__message">
                         <Avatar 
                             className="chartScreen"
                             all={message.name}
                             src={message.image}
                         />
                         <p className="chartScreen__text">{message.message}</p>
                     </div>
                ) : (
                    <div className="chartScreen__message">
                         <p className="chartScreen__textUser">{message.message}</p>
                     </div>
                )     
            ))}
                <form className="chatScreen__input">
                    <input 
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                      className="chatScreen__inputField"
                      placeholder="Type a message"
                      type="text" 
                    />
                    <button onClick={handleSend} type="submit" className="chatScreen__inputButton">SEND</button>
                </form>

        </div>
    )
}

export default ChatScreen
