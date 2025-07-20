import { useState, useEffect, useRef } from "react";
import "./chat.css";
import "../style.css";

// Simulate a simple real-time chat using localStorage events
const CHAT_STORAGE_KEY = "rl03_chat_messages";

type Message = { id: string; text: string; time: string };

const getStoredMessages = (): Message[] => {
  try {
    const stored = localStorage.getItem(CHAT_STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
};

const ChatApp = () => {
  const [messages, setMessages] = useState<Message[]>(() => getStoredMessages());
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Scroll to bottom when messages update
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Listen for localStorage changes (simulate real-time)
  useEffect(() => {
    const handler = () => {
      setMessages(getStoredMessages());
    };
    window.addEventListener("storage", handler);
    return () => window.removeEventListener("storage", handler);
  }, []);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      const newMsg = {
        id: crypto.randomUUID(),
        text: input.trim(),
        time: new Date().toLocaleTimeString(),
      };
      const updated = [...messages, newMsg];
      setMessages(updated);
      localStorage.setItem(CHAT_STORAGE_KEY, JSON.stringify(updated));
      setInput("");
    }
  };

  return (
    <section className="section-box chat-section">
      <h3>Real-Time Chat App</h3>
      <div className="chat-messages">
        {messages.map((msg) => (
          <div key={msg.id} className="chat-message">
            <span className="chat-time">[{msg.time}]</span> {msg.text}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <form className="chat-form" onSubmit={handleSend}>
        <input
          type="text"
          placeholder="Type your message..."
          value={input}
          onChange={e => setInput(e.target.value)}
        />
        <button type="submit">Send</button>
      </form>
    </section>
  );
};

export default ChatApp;
