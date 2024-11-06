import styles from "./ChatContext.module.css";
// import Button from "./Button";
import React, { useState, createContext } from "react";

export const ChatContext = createContext();





export const ChatProvider = ({ children }) => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const sendMessage = () => {
    const newMessage = {
      text: inputValue,
      sender: 'user',
    };
    setMessages([...messages, newMessage]);
    setInputValue('');
  };

  return (
    <ChatContext.Provider value={{ messages, setInputValue, sendMessage }}>
      {children}
    </ChatContext.Provider>
  );
};
