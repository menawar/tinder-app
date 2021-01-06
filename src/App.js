
import './App.css';
import Header from './components/Header/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import TinderCards from './components/Cards/TinderCards';
import SwipeButtons from './components/Buttons/SwipeButtons';
import Chats from './components/Chats/Chats';
import ChatScreen from './components/Screen/ChatScreen';

function App() {
  return (
    <div className="app">
      <Router>
         <Switch>
              <Route path="/chat/:person">
                 <Header backButton="/chat" />
                 <ChatScreen />
              </Route>
              <Route path="/chat">
                 <Header backButton="/" />
                 <Chats />
              </Route>
              <Route exact path="/">
                 <Header />
                <TinderCards />
                <SwipeButtons />
              </Route>
         </Switch>
      </Router>
   
    </div>
  );
}

export default App;
