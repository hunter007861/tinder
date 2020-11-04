import React from 'react';
import "./Chats.css";
import Chat from "./Chat";

function Chats() {
    return (
        <div className="chats">
        <Chat
            name="Aditi"
            message="Hey 😘💚"
            timeStamp="40 seconds ago"
            profile="https://www.hawtcelebs.com/wp-content/uploads/2018/09/alexandra-daddario-at-nomis-premiere-at-la-film-festival-09-28-2018-6.jpg"
        />
        <Chat
            name="Buuuu"
            message="Hey sexy 😘"
            timeStamp="50 minutes ago"
            profile="https://vignette.wikia.nocookie.net/disney/images/1/13/Gal_Gadot.jpg/revision/latest?cb=20180811005357"
        />           

    </div>
       
)}

export default Chats;