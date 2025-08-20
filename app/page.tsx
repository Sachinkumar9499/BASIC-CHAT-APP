"use client";
import React, { useState } from "react";

export default function Home() {
  const [messages, setMessages] = useState<{ text: string; sender: string }[]>([]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages([...messages, { text: input, sender: "user" }]);
    setInput("");

    // Fake bot reply for demo
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { text: "Hello! I'm your AI buddy 🚀", sender: "bot" },
      ]);
    }, 800);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">
      <div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-xl p-6 w-full max-w-md flex flex-col h-[85vh]">
        {/* Title */}
        <h1 className="text-3xl font-extrabold text-center mb-2">🚀 Chat with Sachin</h1>
        <p className="text-center italic text-gray-600 mb-4">“The Future of Chat, Today”</p>

        {/* Chat area */}
        <div className="flex-1 overflow-y-auto space-y-3 mb-4 px-2">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`px-4 py-2 rounded-2xl shadow-md max-w-[75%] ${
                  msg.sender === "user"
                    ? "bg-pink-500 text-white rounded-br-none"
                    : "bg-gray-200 text-gray-900 rounded-bl-none"
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
        </div>

        {/* Input box */}
        <div className="flex items-center gap-2">
          <input
            type="text"
            placeholder="Type your message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
            className="flex-1 px-4 py-2 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
          <button
            onClick={handleSend}
            className="px-5 py-2 bg-pink-500 text-white font-semibold rounded-lg shadow-md hover:bg-pink-600 transition"
          >
            Send 🚀
          </button>
        </div>
      </div>
    </div>
  );
}
