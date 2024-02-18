"use client";
// components/ChatInterface.tsx
import { FC, use, useState, useEffect } from 'react';
import { auth } from "../../auth/firebase";
import {useRouter} from 'next/navigation';
import { useSearchParams } from 'next/navigation'
import { set } from 'firebase/database';
import SourceComponent from '@/components/SourceComponent';
import { Lexend } from "next/font/google";
import Link from "next/link";

const lexend = Lexend({
  subsets: ["latin"],
  display: "swap",
});


interface Message {
  id: number;
  text: string;
  persona: string;
}

// Specify FC with an empty props object to make it clear no props are expected
const ChatInterface: FC<{}> = () => {

  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState('');
  const [sources, setSources] = useState([]);
  const [answerText, setAnswerText] = useState('');
  const[user,setUser] = useState("")

  const [streamDone, setStreamDone] = useState(false);

  const router = useRouter();
  const searchParams = useSearchParams();
  const course_id = searchParams.get('course_id')
  function sourceClicked(document: any) {
    console.log(document);
  
  }
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user.uid);
      } else {
        setUser("");
      }
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if(streamDone && answerText) {
      setMessages((prevMessages) => [...prevMessages, { id: Date.now(), text: answerText, persona: 'assistant' }]);
      setStreamDone(false);
    }}
   , [answerText, streamDone])

  const fetchStreamResponse = async (question: string) => {
    setSources([]);
    setAnswerText('');
    const text = inputText;
    setInputText('');
    const user = "tEmpiJVhWOUBxhoD5acyaNluvIw1"
    const course = "85970000000158100"
    const files="Lab+04+C02+slides.pdf"
    const response = await fetch(`https://back.otto-ta.tech/query_class?question=${inputText}&user_id=tyler&course_id=${course_id}&files=${files}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    });
    
  
    const reader = response?.body?.getReader();
    let decoder = new TextDecoder();
    let buffer = '';
    while (true) {
      if (reader) {
        const { value, done } = await reader.read();
        // rest of your code
            if (done) {
              setStreamDone(true);
              //create assistant message with asnwer text and append it

        
        break;
      }
  
      buffer += decoder.decode(value, { stream: true });
      try {
        let jsonEnd = buffer.indexOf('\n');
        while (jsonEnd !== -1) {
          const json = JSON.parse(buffer.substring(0, jsonEnd));
          buffer = buffer.substring(jsonEnd + 1);
          console.log(json)

  
          if (json.question) {
            // Handle question
          } else if (json.context) {
            console.log("real")
            setSources(json.context);
          } else if (json.answer) {
            setAnswerText(prevStreamText => prevStreamText + json.answer);

           
          }
  
          jsonEnd = buffer.indexOf('\n');
        }
      } catch (error) {
        console.error('Parsing error:', error);
        setMessages([]);
        setSources([]);
      }
    }
    }
  }
  // Specify the event type more precisely
  const sendMessage = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!inputText.trim()) return;
    const newMessage = { id: Date.now(), text: inputText, persona: 'user' };
    setMessages([...messages, newMessage]);
    await fetchStreamResponse("")
    setInputText('');
  };

  return (
    <div className="flex h-screen bg-purple-50">
      <div className="flex flex-col flex-grow">
        <div className='w-full flex items-center justify-center pt-5'>
          <div className={lexend.className}>
          <h1 className='text-zinq-200 text-[40px] font-medium font-lexend'>OttoChat</h1>
          </div>

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
      <div className="bg-purple-700 w-72">

      {sources && sources.map((document: any, index) => (
            <SourceComponent
              key={index + Math.floor(Math.random() * 10).toString()}
              sourceNum={index}
              sourceName={document && document.name ? document.name : "broken"}
              sourceText={document && document.page_content}
              sourceLink={document && document.file_source}
              sourcePreview={document && document.preview}
              hasPreview={document && document.hasPreview}
              sourcePage={document && document.page}
              previewLoaded={document && document.preview ? true : false}
              onClickSource={() => sourceClicked(document)}
            />
          ))}
        {/* Add your content here */}
      </div>
    </div>
  );
};

export default ChatInterface;