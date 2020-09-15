import React, { useState, useEffect } from "react";
import "./Chat.css";
import { Avatar, IconButton } from "@material-ui/core";
import {
  SearchOutlined,
  AttachFile,
  MoreVert,
  InsertEmoticon,
  Mic,
} from "@material-ui/icons";
import { useParams } from "react-router-dom";
import db from "../firebase";

function Chat() {
  const [input, setInput] = useState("");
  const { roomId } = useParams();
  const [roomName, setRoomName] = useState("");

  useEffect(() => {
    if (roomId) {
      console.log(roomId);
      db.collection("rooms")
        .doc(roomId)
        .onSnapshot((snapshot) => setRoomName(snapshot.data().name));
    }
    console.log(roomName);
  }, [roomId]);

  const sendMessage = async (e) => {
    e.preventDefault();

    setInput("");
  };
  return (
    <div className="chat">
      {/* Header */}
      <div className="chat__header">
        <Avatar />
        <div className="chat__headerInfo">
          {roomName && <h3>{roomName}</h3>}
          <p>Last seen at ...</p>
        </div>
        <div className="chat__headerRight">
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <AttachFile />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>
      {/* Chat body */}
      <div className="chat__body">
        <p className={`chat__message`}>
          <span className="chat__name">Makki </span>
          My message
          <span className="chat__timestamp">Just now</span>
        </p>
        <p className={`chat__message chat__receiver`}>
          <span className="chat__name">Makki </span>
          My message
          <span className="chat__timestamp">Just now</span>
        </p>
      </div>
      {/* Chat footer */}
      <div className="chat__footer">
        <InsertEmoticon />
        <form>
          <input
            type="text"
            placeholder="Type a message"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button type="submit" onClick={sendMessage}>
            Send a message
          </button>
        </form>
        <Mic />
      </div>
    </div>
  );
}

export default Chat;
