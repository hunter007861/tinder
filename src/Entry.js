import React from "react";
import { useState } from "react";
import axios from "./axios";
import { Input} from "@material-ui/core";
import "./Entry.css";
import PersonRoundedIcon from '@material-ui/icons/PersonRounded';
import ImageIcon from '@material-ui/icons/Image';
function Entry() {
    const [name, setName] = useState("");
    const [imgUrl, setImgUrl] = useState("");

    const handleUpload = e => {
       e.preventDefault();

        axios.post("/tinder/entry", {
            name: name,
            imgUrl: imgUrl
        });

        setName("");
        setImgUrl("");
    }

    



    return (
        <div className="entryScreen">
            <h1 className="mainH">CREATE ACCOUNT</h1> 
            <form className="entryForm">
                <div>
                    <h3 className="enter_Name" >My name is </h3>
                    <div className="nameInput">
                        <PersonRoundedIcon className="IconN" />
                        <Input fullWidth="true" disableUnderline="true" placeholder="First Name" value={name} onChange={e => setName(e.target.value)} type="text" />
                    </div>
                  
               
                    <h3 className="enter_Name">Img Url: </h3>
                    <div className="nameInput">
                        <ImageIcon className="IconN" />
                        <Input fullWidth="true" disableUnderline="true" multiline="true" placeholder="Enter Image URL" value={imgUrl} onChange={e => setImgUrl(e.target.value)} type="text" />
                    </div>
                    <button onClick={handleUpload} type="submit" className="inputButton">
                        SEND
                </button>

                </div>   
                   

            </form>

        </div>

    );
}

export default Entry;