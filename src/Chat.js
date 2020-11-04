import React from "react";
import Avatar from '@material-ui/core/Avatar';
import "./Chat.css";
import { Link } from "react-router-dom";



function Chat({ name, message, timeStamp, profile }) {
    return (
        <Link to={"/chats/" + name}>
        <div className="chat">
        <Avatar className="chat_image" alt={name} src={profile} />
        <div className="chat_details">
        <h2>{name}</h2>
        <p>{message}</p>
        </div>
        <p className="timeStamp">{timeStamp}</p>
            </div>
        </Link>
)}

export default Chat;