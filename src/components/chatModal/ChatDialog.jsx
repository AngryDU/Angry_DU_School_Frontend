import React, { useState } from "react";
import styles from "./ChatDialog.module.css";
// import { Button } from "@mui/material";
import Button from "../UI/Button";












const ChatDialog = ({ onCloseDialogmodal }) => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");
  // Function to handle sending a new message

  const dialogueContentChangeHandler = (event) => {
    setInputValue(event.target.value);
  };

  const sendMessageHandler = (newMessage) => {
    setMessages([...messages, newMessage]);
    setInputValue("");
  };

  return (
    <div className={styles.modal}>

      <header className={styles.headerChatDialogue}>
        <h1 className={styles.headerChatModal}>Здравствуйте, начать диалог...</h1>
      </header>

      <section className={styles.chatArea}>
        <div className={styles.messageArea}>
          {messages.map((message, index) => (
            <div key={index} className={styles.message}>
              {message}
            </div>
          ))}
        </div>
        <div className={styles.form}>
          <label htmlFor="dialog"></label>
          <textarea
            id="dialog"
            type="text"
            placeHolder="Type a message..."
            onChange={dialogueContentChangeHandler}
            value={inputValue}
            className={styles.textArea}
          />
          <div  className={styles.btnArea}>
            <Button
             className={styles.leftChatBtn}
              // variant="contained"
              // style={{ backgroundColor: "darkviolet" }}

              onClick={() => sendMessageHandler(inputValue)}
            >
              Send a message
            </Button>
            <Button
              // variant="outlined"
              // style={{ backgroundColor: "black" }}
              onClick={() => {
                onCloseDialogmodal();
              }}
            >
              Закрыть
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ChatDialog;
