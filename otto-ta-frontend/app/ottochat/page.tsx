"use client";
// components/ChatInterface.tsx
import { FC, useState } from 'react';

interface Message {
  id: number;
  text: string;
  persona: string;
}

// Specify FC with an empty props object to make it clear no props are expected
const ChatInterface: FC<{}> = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState('');

  // Specify the event type more precisely
  const sendMessage = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!inputText.trim()) return;
    const newMessage = { id: Date.now(), text: inputText, persona: 'user' };
    setMessages([...messages, newMessage]);
    setInputText('');
  };

  return (
    <div className="flex flex-col h-screen bg-purple-50">
      <div className='w-full flex items-center justify-center pt-5'>
        <h1 className='text-black'>OttoChat</h1>
      </div>
      <div className="flex-grow overflow-auto p-4 space-y-2 pt-10">
        {messages.map((message) => (
          <div key={message.id} className="bg-purple-600 text-white p-2 rounded-lg max-w-xl mx-auto">
            {message.text}
          </div>
        ))}
      </div>
      <form onSubmit={sendMessage} className="flex p-4 bg-purple-100 border-t-2 border-purple-300">
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          className="flex-grow px-4 py-2 border-2 border-purple-300 rounded-l-lg focus:outline-none focus:border-purple-500 text-black"
          placeholder="Type a message..."
        />
        <button
          type="submit"
          className="bg-purple-500 text-white px-6 py-2 rounded-r-lg hover:bg-purple-600 focus:outline-none"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default ChatInterface;
