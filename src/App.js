import ChatBar from "./components/chatbar/ChatBar";
import SideBar from "./components/sidebar/SideBar";
import './components/styles/app.css'

function App() {
  return (
    <div className="app">
      <div className="app_window">
        <SideBar />
        <ChatBar />
      </div>
    </div>
  );
}

export default App;
