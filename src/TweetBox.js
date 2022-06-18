import { Avatar, Button } from "@material-ui/core";
import React, { useState } from "react";
import "./TweetBox.css";
import db from './firebase';


function TweetBox() {
    const [tweetMessage, setTweetMessage] = useState('');
    const [tweetImage, setTweetImage] = useState('');
    const sendTweet = e => {
        e.preventDefault();

        db.collection('posts').add({
            displayName: 'Eli Derjabin',
            username: 'ederja',
            verified: true,
            text: tweetMessage,
            image: tweetImage,
            avatar: 'https://yt3.ggpht.com/yti/APfAmoF0XKWZshyBWAwgb-CA6uBmrqKhYwbhEY3uz-nsoA=s88-c-k-c0x00ffffff-no-rj-mo'
        });

        setTweetMessage('');
        setTweetImage('');
    }

    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                <Avatar src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.announcementconverters.com%2Fkeaykolour-pastel-pink-27-5-x-39-3-80-text-sheets.html&psig=AOvVaw38zcg8Ze3ExbmBRlZs51Se&ust=1645675904845000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCNDH6M_6lPYCFQAAAAAdAAAAABAJ"/>
                <input 
                onChange={e => setTweetMessage(e.target.value)}
                value={tweetMessage} 
                placeholder="What's happening?" 
                type="text"></input>
                </div>
                <input 
                onChange={e => setTweetImage(e.target.value)}
                value={tweetImage}
                className= "tweetBox__imageInput"
                placeholder="Enter image URL" 
                type="text"></input>
                
                <Button onClick={sendTweet} type="submit" className="tweetBox__tweetButton">Tweet</Button>
            </form>
        </div>
    )
}

export default TweetBox;