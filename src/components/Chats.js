import React from 'react';
import Chat from './Chat';

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
                profilePics="https://www.gannett-cdn.com/presto/2019/10/08/USAT/0b7128d2-9728-41f5-b7c8-5f1c900cfea8-Ellen_DeGeneres_1.JPG"
            />
            <Chat
                name="Sandra"
                message="Ola!"
                timestamp="3 days age"
                profilePics="https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F0cd934b4c7b6065496ba00e1f5f826d4%2F0x0.jpg"
            />
            <Chat
                name="Natasha"
                message="Oops there is he is... 🐈"
                timestamp="1 week age"
                profilePics="https://www.nydailynews.com/resizer/BkGL6WKyruVafxmYWIYz2Vpv5_Q=/415x375/top/arc-anglerfish-arc2-prod-tronc.s3.amazonaws.com/public/EILE2M3TVN7PFL4XEVO5Z2GQW4.jpg"
            />
        </div>
    )
}

export default Chats
