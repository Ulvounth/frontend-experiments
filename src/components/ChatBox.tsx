import { useState } from "react";

export default function ChatBox() {
  const [inputText, setInputText] = useState("");
  const [messages, setMessages] = useState<string[]>([]);

  const handleSubmit = () => {
    if (inputText.trim()) {
      setMessages([...messages, inputText]);
      setInputText("");
    }
  };

  const handleDelete = (index: number) => {
    setMessages(messages.filter((_, i) => i !== index));
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <div className="p-5 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Chat Experiment</h2>

      <div className="flex gap-2 mb-4">
        <input
          placeholder="Write a message..."
          className="border p-2 rounded flex-1"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button
          onClick={handleSubmit}
          className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition"
        >
          Send
        </button>
      </div>

      <div className="border rounded p-4 bg-gray-50 min-h-[300px]">
        {messages.length === 0 ? (
          <p className="text-gray-400 italic">No messages yet...</p>
        ) : (
          <div className="space-y-2">
            {messages.map((message, index) => (
              <div
                key={index}
                className="bg-white p-3 rounded shadow flex justify-between items-center"
              >
                <span>{message}</span>
                <button
                  onClick={() => handleDelete(index)}
                  className="text-red-500 hover:text-red-700 font-bold ml-4"
                >
                  ✕
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
