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
  const [isTyping, setIsTyping] = useState<boolean>(false);
  const boxRef = useRef<HTMLDivElement | null>(null);
  const endRef = useRef<HTMLDivElement | null>(null);

  // Scroll to bottom whenever messages update
  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Optional: click outside to close (kept optional)
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (boxRef.current && !boxRef.current.contains(e.target as Node)) {
        // Optionally close widget
      }
    };
    window.addEventListener("click", handleClickOutside);
    return () => window.removeEventListener("click", handleClickOutside);
  }, []);

  // Auto greeting on open
  useEffect(() => {
    if (open && messages.length === 0) {
      setTimeout(() => {
        setMessages([
          {
            sender: "rohee",
            text: "👋 Hi there! I'm **Rohee**, Rohith Reddy’s personal AI assistant. How can I help you today?",
          },
        ]);
      }, 400);
    }
  }, [open]);

  const sendMessage = async (): Promise<void> => {
    if (!input.trim()) return;
    const userMsg: Message = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");

    try {
      setIsTyping(true);
      const res = await fetch(`${apiBaseUrl}/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        // ✅ Match backend: your backend expects "question"
        body: JSON.stringify({ question: userMsg.text }),
      });

      if (!res.ok) throw new Error("Network error");

      const data = await res.json();
      const botMsg: Message = {
        sender: "rohee",
        text: data.answer || "Hmm, I’m not sure how to respond to that.",
      };
      setMessages((prev) => [...prev, botMsg]);
    } catch (err) {
      console.error("Chat error:", err);
      setMessages((prev) => [
        ...prev,
        { sender: "rohee", text: "⚠️ Sorry, something went wrong." },
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) =>
    setInput(e.target.value);

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
          className="flex flex-col w-[340px] max-h-[70vh] bg-white text-gray-800 rounded-2xl shadow-2xl border border-blue-300 overflow-hidden transition-all duration-300"
        >
          {/* Header */}
          <div className="p-3 bg-gradient-to-r from-blue-600 to-cyan-500 flex justify-between items-center">
            <span className="font-semibold text-white">🤖 Rohee</span>
            <button
              onClick={() => setOpen(false)}
              className="text-white text-lg font-bold hover:text-gray-200"
            >
              ×
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
            {messages.length === 0 && (
              <p className="text-gray-400 text-sm text-center mt-10">
                Say hi to Rohee 👋
              </p>
            )}
            {messages.map((m, i) => (
              <div
                key={i}
                className={`my-2 ${
                  m.sender === "user" ? "text-right" : "text-left"
                }`}
              >
                <div
                  className={`inline-block px-3 py-2 text-sm rounded-xl shadow-sm ${
                    m.sender === "user"
                      ? "bg-blue-600 text-white"
                      : "bg-white border border-gray-200 text-gray-800"
                  }`}
                  style={{
                    maxWidth: "85%",
                    wordWrap: "break-word",
                  }}
                >
                  {m.text}
                </div>
              </div>
            ))}

            {/* Typing indicator */}
            {isTyping && (
              <div className="text-left text-sm text-gray-500 italic animate-pulse">
                Rohee is typing...
              </div>
            )}

            <div ref={endRef}></div>
          </div>

          {/* Input area */}
          <div className="flex items-center border-t border-gray-200 p-2 bg-white">
            <input
              type="text"
              value={input}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
              placeholder="Type a message..."
              className="flex-1 text-sm bg-transparent border-none text-gray-800 outline-none placeholder-gray-400 px-2"
            />
            <button
              onClick={sendMessage}
              className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:opacity-90 px-3 py-1 rounded-lg text-sm font-medium text-white"
            >
              Send
            </button>
          </div>
        </div>
      )}

      {/* Floating Icon */}
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="w-14 h-14 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:opacity-90 text-white shadow-lg text-2xl flex items-center justify-center transition-all duration-200"
        title="Chat with Rohee"
      >
        🤖
      </button>
    </div>
  );
}
