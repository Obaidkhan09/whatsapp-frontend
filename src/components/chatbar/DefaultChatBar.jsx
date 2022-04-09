import logo from "../../assets/chat-logo.png";
import "../styles/default-chat-bar.css"

export default function DefaultChatBar() {
    return (
        <div className="default">
            <div className="default-child">
                <h1>Welcome to ChatApp</h1>
                <h4>Powered with MERN Stack</h4>
                <img className="img-class" src={logo} />
            </div>
        </div>
    )
}
