// components/Chat.js
import React from "react";

function App() {
  // const [input, setInput] = useState("");
  // const [messages, setMessages] = useState([]);
  // const [status, setStatus] = useState("Connecting...");
  // const socketRef = useRef(null);

  // useEffect(() => {
  //   const socket = new WebSocket("wss://workdesk.onrender.com");
  //   socketRef.current = socket;

  //   socket.onopen = () => {
  //     setStatus("🟢 Connected");
  //     console.log("Connected to WebSocket server");
  //   };

  //   socket.onmessage = (event) => {
  //     try {
  //       const data = JSON.parse(event.data);
  //       if (data.type === "userList") {
  //         setMessages((prev) => [
  //           ...prev,
  //           `👥 Users: ${data.users.join(", ")}`,
  //         ]);
  //       } else if (data.type === "message") {
  //         setMessages((prev) => [...prev, `📩 ${data.content}`]);
  //       } else {
  //         setMessages((prev) => [...prev, `📥 ${event.data}`]);
  //       }
  //     } catch {
  //       setMessages((prev) => [...prev, `📥 ${event.data}`]);
  //     }
  //   };

  //   socket.onerror = (err) => {
  //     console.error("WebSocket error:", err);
  //     setStatus("🔴 Error");
  //   };

  //   socket.onclose = () => {
  //     console.log("Disconnected");
  //     setStatus("🔴 Disconnected");
  //   };

  //   return () => socket.close();
  // }, []);

  // const sendMessage = () => {
  //   if (input.trim() && socketRef.current.readyState === WebSocket.OPEN) {
  //     socketRef.current.send(input);
  //     setMessages((prev) => [...prev, `🧑 You: ${input}`]);
  //     setInput("");
  //   }
  // };

  // const requestUserList = () => {
  //   if (socketRef.current.readyState === WebSocket.OPEN) {
  //     socketRef.current.send(JSON.stringify({ type: "getUsers" }));
  //   }
  // };

  return (
    <div
      style={{ maxWidth: 600, margin: "2rem auto", fontFamily: "sans-serif" }}
    >
      <h2>💬 Real-time Chats</h2>
      {/* <p>Status: {status}</p>
      <div
        style={{
          border: "1px solid #ccc",
          borderRadius: 8,
          padding: "1rem",
          height: 300,
          overflowY: "auto",
          background: "#f9f9f9",
          marginBottom: 12,
        }}
      >
        {messages.map((msg, i) => (
          <div key={i} style={{ marginBottom: 4 }}>
            {msg}
          </div>
        ))}
      </div> */}
      {/* <div style={{ display: "flex", gap: 8 }}>
        <input
          style={{ flex: 1, padding: "0.5rem" }}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          placeholder="Type your message..."
        />
        <button onClick={sendMessage}>Send</button>
        <button onClick={requestUserList}>Get Users</button>
      </div> */}
    </div>
  );
}

export default App;
