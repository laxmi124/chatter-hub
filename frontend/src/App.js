import "./App.css";
import Homepage from "./Pages/Homepage";
import { Routes, Route } from "react-router-dom";
// import Chatpage from "./Pages/ChatPage.jsx";
import Chat from "./Pages/Chat";

function App() {
  // return (
  //   <div className="App">
  //     <Router>
  //       <Routes>
  //         <Route path="/" element={<Homepage />} />
  //         <Route path="/chats" element={<Chat />} />
  //       </Routes>
  //     </Router>
  //     {/* <h1> test</h1> */}
  //   </div>
  // );

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/chats" element={<Chat />} />
      </Routes>
    </div>
  );
}

export default App;
