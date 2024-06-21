import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import './ChatWidget.css';

const socket = io('https://your-chat-server-url'); // replace with your server URL

const ChatWidget = () => {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    socket.on('message', (msg) => {
      setMessages((prevMessages) => [...prevMessages, msg]);
    });

    return () => {
      socket.off('message');
    };
  }, []);

  const sendMessage = () => {
    socket.emit('message', message);
    setMessage('');
  };

  return (
    <div className="chat-widget">
      <div className="messages">
        {messages.map((msg, index) => (
          <div key={index} className="message">{msg}</div>
        ))}
      </div>
      <div className="input-area">
        <input 
          type="text" 
          value={message} 
          onChange={(e) => setMessage(e.target.value)} 
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};

export default ChatWidget;