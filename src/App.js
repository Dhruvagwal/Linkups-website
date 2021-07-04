import React from 'react'
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import './App.css'
import './asset/css/tailwind.css'

import HomeScreen from './Screens/Home'

function App() {
  return (
    <div className=' text-white overflow-hidden w-screen' style={{backgroundColor:'#090909'}}>
      <Router>        
      <Switch>
            <Route path="/about">
              {/* <About /> */}
            </Route>
            <Route path="/users">
              {/* <Users /> */}
            </Route>
            <Route path="/" component={props=><HomeScreen/>}/>
          </Switch>
      </Router>
    </div>

  )
}

export default App
