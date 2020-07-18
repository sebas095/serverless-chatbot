import React, { createRef } from "react";

const InputText = ({ sendMessage }) => {
  const input = createRef();

  const sendTextMessage = () => {
    if (input.current?.value && sendMessage) {
      sendMessage(input.current.value);
    }

    input.current.value = null;
  };

  const checkEnterPressed = (ev) => {
    if (ev.keyCode === 13 && !ev.shiftKey) {
      sendTextMessage();
    }
  };

  return (
    <div className="bottom_wrapper clearfix">
      <div className="message_input_wrapper">
        <input
          className="message_input"
          ref={input}
          type="text"
          onKeyDown={checkEnterPressed}
          placeholder="Introducir texto"
        />
      </div>
      <div className="send_message">
        <div className="icon" />
        <div className="text" onClick={sendTextMessage}>
          Send
        </div>
      </div>
    </div>
  );
};

export default InputText;
