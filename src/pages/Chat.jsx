import React, { useState } from "react";
import { Send, Search } from "lucide-react";

export default function ChatUI() {
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([
    { sender: "Samantha", text: "Hello Nabila!" },
    {
      sender: "Samantha",
      text: "Can i see your history lesson homework?",
    },
    {
      sender: "You",
      text: "Hello Samantha!",
    },
    {
      sender: "You",
      text: "I’m not finished yet, why don’t work together to finish homework?",
    },
  ]);

  const handleSend = () => {
    if (message.trim()) {
      setChat([...chat, { sender: "You", text: message }]);
      setMessage("");
    }
  };

  return (
    <div className="flex h-screen bg-[#f5f7ff] font-sans">
      {/* Sidebar */}
      <aside className="w-1/3 max-w-sm bg-white border-r border-gray-200 p-4 flex flex-col">
        <h2 className="text-lg font-semibold mb-4">Messages</h2>
        <div className="relative mb-6">
          <Search className="absolute left-3 top-2.5 text-gray-400 w-4 h-4" />
          <input
            type="text"
            placeholder="Search here..."
            className="pl-10 pr-4 py-2 rounded-full border border-gray-300 w-full"
          />
        </div>

        <div className="mb-2">
          <h3 className="text-sm font-medium text-gray-500 mb-1">Groups</h3>
          <ul className="space-y-2">
            <li className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-purple-500" />
                <span className="text-sm font-medium">Class History VII-A</span>
              </div>
              <span className="text-xs text-gray-400">12:45 PM</span>
            </li>
            <li className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-orange-400" />
                <span className="text-sm font-medium">Class VII-A</span>
              </div>
              <span className="text-xs text-gray-400">12:45 PM</span>
            </li>
            <li className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-yellow-400" />
                <span className="text-sm font-medium">All Student VII</span>
              </div>
              <span className="text-xs text-gray-400">12:45 PM</span>
            </li>
          </ul>
        </div>

        <div className="mt-4">
          <h3 className="text-sm font-medium text-gray-500 mb-1">Chats</h3>
          <ul className="space-y-2">
            <li className="text-sm">Samantha William</li>
            <li className="text-sm">Tony Soap</li>
            <li className="text-sm">Karen Hope</li>
          </ul>
        </div>

        <button className="mt-auto bg-[#e3e6fc] text-[#6148c4] font-medium py-2 rounded-md border border-[#6148c4]">
          View More
        </button>
      </aside>

      {/* Chat Area */}
      <main className="flex-1 flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-gray-200 px-6 py-4 bg-white">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-purple-300" />
            <div>
              <h3 className="font-semibold">Samantha William</h3>
              <p className="text-xs text-green-500">● Online</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button className="text-gray-400">📹</button>
            <button className="text-gray-400">⋮</button>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 p-6 space-y-4 overflow-y-auto">
          {chat.map((msg, index) => (
            <div
              key={index}
              className={`max-w-[70%] px-4 py-2 text-sm rounded-xl whitespace-pre-wrap ${
                msg.sender === "You"
                  ? "ml-auto bg-[#6148c4] text-white"
                  : "bg-gray-100 text-gray-800"
              }`}
            >
              {msg.text}
            </div>
          ))}
        </div>

        {/* Message Input */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSend();
          }}
          className="flex items-center border-t border-gray-200 px-6 py-4 bg-white"
        >
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Write your message..."
            className="flex-1 py-2 px-4 rounded-full border border-gray-300 focus:outline-none"
          />
          <button
            type="submit"
            className="ml-3 bg-[#6148c4] text-white px-4 py-2 rounded-full flex items-center gap-1"
          >
            Send <Send size={16} />
          </button>
        </form>
      </main>
    </div>
  );
}
