import React from 'react';
import './App.css';
import Chat from './Chat';
import Sidebar from './Sidebar';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'

function App() {
  return (
    <div className="app">
     <div className="app_body">
       <Router>
         <Switch>
           <Route path="/app">
           <Sidebar/>
       <Chat/>
           </Route>
           <Route path="/">
             <h1>Home Screen</h1>
           </Route>
      
       </Switch>
       </Router>

     </div>
    </div>
  );
}

export default App;
