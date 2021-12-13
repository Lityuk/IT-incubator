import React from "react";
import "./Message.css";

type PropsType = {
  avatar?: string;
  name?: string;
  message?: string;
  time?: string;
};
// {props.time}
function Message(props: PropsType) {
  return (
    <div className="wrapper">
      <img src={props.avatar} alt="avatar" className="avatar__image" />
      <div className="message__block">
        <p className="username">{props.name} </p>
        <p className="text__message">{props.message} </p>
        <p className="send__time">{props.time}</p>
      </div>
    </div>
  );
}

export default Message;
