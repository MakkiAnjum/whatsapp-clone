import React, { useEffect, useState } from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import Chat from './components/Chat';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import { useStateValue } from './StateProvider';

function App() {
  const [{ user }, dispatch] = useStateValue()
  const [messages, setMessages] = useState([])

  useEffect(() => {

  }, [])

  return (
    <div className="app">
      {!user ? (
        <Login />
      ) :
        <div className="app__body">

          <Router>
            <Sidebar />
            <Switch>


              <Route path="/rooms/:roomId">
                <Chat />
              </Route>

              <Route path="/">
                <Chat />
              </Route>

            </Switch>
          </Router>
        </div>
      }
    </div>
  );
}

export default App;
