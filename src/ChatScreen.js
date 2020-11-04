import React from "react";
import { useState } from "react";
import "./ChatScreen.css";
import Avatar from '@material-ui/core/Avatar';
import { Input } from "@material-ui/core";


function ChatScreen() {

    const [input, setInput] = useState("");
    const [messages, setMessages] = useState([
        {
            name: "Aditi",
            image: "https://www.hawtcelebs.com/wp-content/uploads/2018/09/alexandra-daddario-at-nomis-premiere-at-la-film-festival-09-28-2018-6.jpg",
            message: "Hey 😘💚"

        },
        {
            name: "Aditi",
            image: "https://www.hawtcelebs.com/wp-content/uploads/2018/09/alexandra-daddario-at-nomis-premiere-at-la-film-festival-09-28-2018-6.jpg",
            message: "Whats Up!!"

        },
        {
            message: "Nothing much wau?"

        }
        //{
        //    name:"Buuuu",
        //    image:"https://vignette.wikia.nocookie.net/disney/images/1/13/Gal_Gadot.jpg/revision/latest?cb=20180811005357",
        //    message:"Hey sexy 😘"                    
        //}
    ])

    const handleSend = e => {
        e.preventDefault();

        setMessages([...messages, { message: input }]);
        setInput("");
    }

    



    return (
        <div className="chatScreen">
            <p className="timeStampMatch">You matched with Aditi on 1-11-2020</p>
            {messages.map((message) => (
                message.name ? (
                    < div className="chatScreen_message" >
                        <Avatar className="chat_image" alt={message.name} src={message.image} />
                        <p className="chatScreen_text">{message.message}</p>
                    </div>
                ) : (
                        < div className="chatScreen_message" >
                            <p className="chatScreen_user">{message.message}</p>
                        </div>
                    )


            ))}
            
            <form className="chatScreen_input">
                <Input value={input} onChange={e => setInput (e.target.value)} className="chatInput" placeholder="Type a message..." type="text" />
                <button onClick={handleSend} type="submit" className="chat_inputButton">SEND</button>
                </form>

           


        </div>
    );
}

export default ChatScreen;