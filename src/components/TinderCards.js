import React, { useState } from 'react';
import TinderCard from 'react-tinder-card';
import './TinderCards.css';


function TinderCards() {
    const [people, setPeople] = useState([
        {
            name: "Steve Jobs",
            url: "https://www.biography.com/.image/t_share/MTY2MzU3OTcxMTUwODQxNTM1/steve-jobs--david-paul-morrisbloomberg-via-getty-images.jpg"

        },
        {
            name: "Mark Zuckerberg",
            url: "https://i.insider.com/5b9198c50ce5f597208b4e1a?width=1100&format=jpeg&auto=webp"
        },
        {
            name: "Jeff Bezos",
            url: "https://chiefexecutive.net/wp-content/uploads/2018/09/bezos-final-0404-compressor-e1536081509164-1024x783.jpg"
        }
    ]);

    return (
        <div>
            <h1>Tinder cards</h1>
            <div className="tinderCards__cardContainer">
                {people.map(person => (
                    <TinderCard
                        className="swipe"
                        key={person.name}
                        preventSwipe={['up', 'down']}
                    >
                        <div
                            style={{ backgroundImage: `url(${person.url})` }}
                            className="card">
                            <h3>{person.name}</h3>
                        </div>
                    </TinderCard>
                ))}
            </div>
        </div>
    )
}

export default TinderCards
