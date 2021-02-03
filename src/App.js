import { ChatEngine }from 'react-chat-engine'
import ChatFeed from './components/ChatFeed'
import './App.css'
import LoginForm from './components/LoginForm'

const App = () => {

    if(!localStorage.getItem('username')){
        return <LoginForm />
    }

    return (
        <ChatEngine 
            height="100vh"
            projectID="e0fc0225-34ba-42e1-a4b4-cdaac70c6a38"
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            renderChatFeed={(chatAppProps) =>
                <ChatFeed {...chatAppProps} />
            }
        />
    );
}

export default App;