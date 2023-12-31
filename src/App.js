import './App.css';
import {ChatEngine}from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';

const App=()=>{
  /// if not logged in go to login form
  if(!localStorage.getItem('username'))
  return <LoginForm/>

  return (    
   <ChatEngine
        height="100vh"
        projectID="e7fa1736-57ad-43e3-915c-3b43338a1819"
        userName={localStorage.getItem('username')}
        userSecret={localStorage.getItem('password')}
        renderChatFeed={ (chatAppProps) => <ChatFeed {...chatAppProps}/>}

   /> 
  );
}

export default App;