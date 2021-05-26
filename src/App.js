import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from './components/home/Home';
import Navbar from './components/layout/Navbar'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
