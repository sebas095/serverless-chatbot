import React from "react";

const MessageList = ({ messageList }) =>
  messageList.map((item, i) => (
    <li
      key={`${i}-${item.user}`}
      className={
        item.user === "human"
          ? "message right appeared"
          : "message left appeared"
      }
    >
      <div className="avatar" />
      <div className="text_wrapper">
        <div className="text">{item.message}</div>
      </div>
    </li>
  ));

export default MessageList;
