import React from 'react';
import Chat from './Chat';
import './Chats.css';

function Chats() {
    return (
        <div className="chats">
            <Chat
                name="Sarah"
                message="Hey! how are you 😊"
                timestamp="35 minutes age"
                profilePics="https://4.bp.blogspot.com/-eUHYCVj6AmY/TYGBGTPjNLI/AAAAAAAABwI/MIJSB6gvtz8/s1600/sarah%2Bwalker%2B6.jpg"
            />
            <Chat
                name="Ellen"
                message="Whats up ❤️?"
                timestamp="55 minutes age"
                profilePics="https://4.bp.blogspot.com/-eUHYCVj6AmY/TYGBGTPjNLI/AAAAAAAABwI/MIJSB6gvtz8/s1600/sarah%2Bwalker%2B6.jpg"
            />
            <Chat
                name="Sandra"
                message="Ola!"
                timestamp="3 days age"
                profilePics="https://4.bp.blogspot.com/-eUHYCVj6AmY/TYGBGTPjNLI/AAAAAAAABwI/MIJSB6gvtz8/s1600/sarah%2Bwalker%2B6.jpg"
            />
            <Chat
                name="Natasha"
                message="Oops there is he is... 🐈"
                timestamp="1 week age"
                profilePics="https://4.bp.blogspot.com/-eUHYCVj6AmY/TYGBGTPjNLI/AAAAAAAABwI/MIJSB6gvtz8/s1600/sarah%2Bwalker%2B6.jpg"
            />
        </div>
    )
}

export default Chats
