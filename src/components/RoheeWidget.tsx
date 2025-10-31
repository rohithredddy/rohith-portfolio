import { useState, useRef, useEffect, KeyboardEvent, ChangeEvent } from "react";

interface Message {
  sender: "user" | "rohee";
  text: string;
}

interface RoheeWidgetProps {
  apiBaseUrl: string;
}

export default function RoheeWidget({ apiBaseUrl }: RoheeWidgetProps) {
  const [open, setOpen] = useState<boolean>(false);
  const [input, setInput] = useState<string>("");
  const [messages, setMessages] = useState<Message[]>([]);
  const boxRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Optional: Add click-outside behavior
    function handleClickOutside(e: MouseEvent) {
      if (boxRef.current && !boxRef.current.contains(e.target as Node)) {
        // Do nothing for now (you can close here if needed)
      }
    }
    window.addEventListener("click", handleClickOutside);
    return () => window.removeEventListener("click", handleClickOutside);
  }, []);

  const sendMessage = async (): Promise<void> => {
    if (!input.trim()) return;
    const userMsg: Message = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");

    try {
      const res = await fetch(`${apiBaseUrl}/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      });

      if (!res.ok) throw new Error("Network error");

      const data = await res.json();
      const botMsg: Message = {
        sender: "rohee",
        text: data.reply || data.message || "No reply",
      };
      setMessages((prev) => [...prev, botMsg]);
    } catch (err) {
      console.error("Chat error:", err);
      setMessages((prev) => [
        ...prev,
        { sender: "rohee", text: "⚠️ Sorry, something went wrong." },
      ]);
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") sendMessage();
  };

  return (
    <div
      className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end space-y-2"
      style={{ fontFamily: "Inter, sans-serif" }}
    >
      {/* Chat Box */}
      {open && (
        <div
          ref={boxRef}
          className="flex flex-col w-[340px] max-h-[60vh] bg-[#0f172a] text-white rounded-2xl shadow-2xl border border-cyan-600 overflow-hidden"
        >
          <div className="p-3 bg-cyan-600 flex justify-between items-center">
            <span className="font-semibold text-white">🤖 Rohee</span>
            <button
              onClick={() => setOpen(false)}
              className="text-white text-lg font-bold hover:text-gray-200"
            >
              ×
            </button>
          </div>

          <div className="flex-1 p-3 overflow-y-auto">
            {messages.length === 0 && (
              <p className="text-gray-400 text-sm text-center mt-10">
                Say hi to Rohee 👋
              </p>
            )}
            {messages.map((m, i) => (
              <div
                key={i}
                className={`my-1 ${
                  m.sender === "user" ? "text-right" : "text-left"
                }`}
              >
                <div
                  className={`inline-block px-3 py-2 text-sm rounded-xl ${
                    m.sender === "user"
                      ? "bg-cyan-700 text-white"
                      : "bg-gray-800 text-gray-200"
                  }`}
                >
                  {m.text}
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center border-t border-gray-800 p-2 space-x-2 bg-[#0b1220]">
            <input
              type="text"
              value={input}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
              placeholder="Type a message..."
              className="flex-1 text-sm bg-transparent border-none text-white outline-none placeholder-gray-400"
            />
            <button
              onClick={sendMessage}
              className="bg-cyan-600 hover:bg-cyan-700 px-3 py-1 rounded-lg text-sm font-medium"
            >
              Send
            </button>
          </div>
        </div>
      )}

      {/* Floating Icon */}
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="w-14 h-14 rounded-full bg-cyan-600 hover:bg-cyan-700 text-white shadow-lg text-2xl flex items-center justify-center"
        title="Chat with Rohee"
      >
        🤖
      </button>
    </div>
  );
}
