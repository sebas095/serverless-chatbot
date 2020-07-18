import React, { useState, createRef, useEffect } from "react";

import InputText from "./InputText";
import MessageList from "./MessageList";

import sendMessageApi from "../../utils/api.service";

const initMessage = {
  user: "bot",
  message: "¡Hola!, soy tu asistente virtual. Espero poder ayudarte.",
};

const Chat = () => {
  const [messages, setMessages] = useState([initMessage]);
  const messagesRef = createRef();

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = async (message) => {
    setMessages([...messages, { message, user: "human" }]);

    const result = await sendMessageApi(message);
    setMessages((prev) => [...prev, result]);
  };

  const scrollToBottom = () => {
    if (messagesRef.current) {
      messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
    }
  };

  return (
    <div>
      <div className="chat_window">
        <div className="top_menu">
          <div className="buttons">
            <div className="button close" />
            <div className="button minimize" />
            <div className="button maximize" />
          </div>
          <div className="title">Dialogflow Chatbot</div>
        </div>
        <ul className="messages" ref={messagesRef}>
          <MessageList messageList={messages} />
        </ul>
        <InputText sendMessage={sendMessage} />
      </div>
    </div>
  );
};

export default Chat;
