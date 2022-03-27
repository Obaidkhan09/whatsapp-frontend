import ChatBar from "./components/chatbar/ChatBar";
import SideBar from "./components/sidebar/SideBar";
import Pusher from 'pusher-js'
import './components/styles/app.css'

function App() {
  var pusher = new Pusher(process.env.REACT_APP_PUSHER_TOKEN, {
    cluster: 'ap2'
  });

  var channel = pusher.subscribe('messages');
  channel.bind('inserted', function(data) {
    alert(JSON.stringify(data));
  });
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
