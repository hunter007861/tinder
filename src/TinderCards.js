import React from 'react';
import './TinderCards.css';
import TinderCard from 'react-tinder-card';
import { useState, useEffect } from 'react';
import axios from "./axios";

function TinderCards() {
    const [people, setPeople] = useState([]);
  
    //peice of code that runs on a condition

    useEffect(() => {
        async function fetchData() {
            const req = await axios.get("/tinder/cards");

            setPeople(req.data);
        }
        
        fetchData();
    }, [])
    console.log(people);


    const swiped = (direction, nameToDelete) => {
        console.log('Name to Remove ' + nameToDelete);
       // setLastDirection(direction);
    }

    const outOfFrame = (name) => {
        console.log(name + ' left the screen')
    }

   

    return (
        <div className="tinderCards">
            <div className="tinderCards_cardsContainer">

                {people.map((person) => (
                    <TinderCard
                        className="swipe"
                        key={person.name}
                        preventSwipe={["up", "down"]}
                        onSwipe={(dir) => swiped(dir, person.name)}
                        onCardLeftScreen={() => outOfFrame(person.name)}

                    >
                        <div
                            style={{ backgroundImage: "url(" + person.imgUrl + ")" }}
                            className="cards"
                        >
                            <h3>{person.name}</h3>
                        </div>

                    </TinderCard>
                ))}


            </div>
        </div>
    );
}

export default TinderCards;
