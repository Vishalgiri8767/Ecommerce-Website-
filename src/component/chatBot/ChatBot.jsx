import openai from '../../utils/openai';
import React, { useEffect, useState } from 'react';

const ChatBot = () => {
  
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [gptMessage, setGptMessage] = useState([]);

  const handleMessageSubmit = (e) => {
    e.preventDefault();
    // console.log(inputValue)
     if (inputValue.trim() !== '') {
       // Here you can implement your logic to handle the user's message
       // For simplicity, let's just echo back the user's message for now
       setMessages([...messages, { sender: 'user', text: inputValue }]);
       setInputValue('');
       handleGptResult();
     }
    };

  const handleGptResult = async()=>{
    const query = "act like chatbot in ecommerse website and give as possible short within a line"+ inputValue;
       // make an API call to openai and get movie results.
       const gptResults = await openai.chat.completions.create({
        messages: [{ role: 'user', content: query }],
        model: 'gpt-3.5-turbo',
      });
    // console.log(gptResults.choices?.[0]?.message?.content);
     const result =gptResults.choices?.message?.content;
    

     setGptMessage(result);
      
  }
  
  return (
    <div className="fixed bottom-0 right-0 z-50 mr-16 mb-12 ">
      <div className="bg-white rounded-lg border border-gray-300 shadow-md w-72">
      
     
      <div className="mb-2 pr-2 pt-4 text-right">Hello, How Can I help you?</div>
      

    <div className="mb-2 pr-2 pt-4 text-right">{gptMessage}</div>


        <div className="p-4">
          <div className="h-72 overflow-y-auto">
            {messages.map((message, index) => (
              <div key={index} className={`mb-2 ${message.sender === 'user' ? 'text-right' : ''}`}>
                {message.text}
              </div>
            ))}
          </div>
          <form onSubmit={handleMessageSubmit}>
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="w-full border rounded px-3 py-2 outline-none"
              placeholder="Type your message..."
            />
            <button type="submit" className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ChatBot;
