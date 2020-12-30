import React, { useState } from 'react';
import Avatar from "@material-ui/core/Avatar";
import "./ChatScreen.css";

function ChatScreen() {
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([
        {
            name: 'Ellen',
            image: "https://www.gannett-cdn.com/presto/2019/10/08/USAT/0b7128d2-9728-41f5-b7c8-5f1c900cfea8-Ellen_DeGeneres_1.JPG",
            message: 'Whats up ❤️'
        },
        {
            name: 'Ellen',
            image: "https://www.gannett-cdn.com/presto/2019/10/08/USAT/0b7128d2-9728-41f5-b7c8-5f1c900cfea8-Ellen_DeGeneres_1.JPG",
            message: "How's it going!"
        },
        {
            message: 'Hi! How are you Ellen!'
        }
    ]);

    const handleSend = e => {
        e.preventDefault();

        setMessages([...messages, { message: input }]);
        setInput("");
    };

    return (
        <div className="chatScreen">
            <p className="chatScreen__timestamp">YOU MATCHED WITH ELLEN ON 10/08/20</p>
            {messages.map((msg) =>
                msg.name ? (
                    <div className="chatScreen__message">
                        <Avatar
                            className="chatScreen__image"
                            alt={msg.name}
                            src={msg.image}
                        />
                        <p className="chatScreen__text">{msg.message}</p>
                    </div>
                ) : (
                        <div className="chatScreen__message">
                            <p className="chatScreen__textUser">{msg.message}</p>
                        </div>
                    )
            )}
            <form className="chatScreen__input">
                <input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="chatScreen__inputField"
                    type="text"
                    placeholder="Type a message..." />
                <button
                    onClick={handleSend}
                    className="inputButton"
                >SEND</button>
            </form>
        </div>
    );
}

export default ChatScreen
