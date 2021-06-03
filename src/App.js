import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from './components/home/Home';
import Navbar from './components/layout/Navbar'
import Favorites from './components/notes/Favorites'
import NoteDetail from './components/notes/NotesDetail'
import EditForm from './components/notes/EditForm'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/favorites" component={Favorites}/>
        <Route path="/note/:id" component={NoteDetail}/>
        <Route path="/edit/:id" component={EditForm}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
