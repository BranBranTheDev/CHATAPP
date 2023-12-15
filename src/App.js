import { ChatEngine } from "react-chat-engine";
import ChatFeed from './components/ChatFeed'; 
import Login from './components/LoginForm';
import './App.css';

const App = () => {
    if(!localStorage.getItem('username')) return <Login /> //if no username, go to login page
    
    return (
        <ChatEngine
            height='100vh'
            projectID="6f6ab379-76d5-48c9-9479-a196d5dd78fd"
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps}/>}
        />
    );
}

export default App;

//https://www.youtube.com/watch?v=jcOKU9f86XE&t=381s
//left off at 12:46