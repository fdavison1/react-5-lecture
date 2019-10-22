import React from 'react';
import './App.css';
import {HashRouter, Route} from 'react-router-dom'
import GreatHall from './components/GreatHall'
import About from './components/About'
import House from './components/House'

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      house: null,
      mainColor: '',
      secondaryColor: ''
    }
  }

navigateHome(){
  window.location = '/#/'
}

render(){
  return (
    <HashRouter>
    <div className="App">
      <header onClick={() => this.navigateHome()}>
        <h1>Hoggy Hoggy Hogwarts</h1>
        <img src="https://vignette.wikia.nocookie.net/harrypotter/images/a/ae/Hogwartscrest.png/revision/latest?cb=20110806202805" alt=""/>
      </header>
    <Route exact path='/' component={GreatHall}/>
    <Route path='/about' component={About}/>
    <Route path='/house/:name' component={House}/>
    </div>
    </HashRouter>
  );
}
}

export default App;
