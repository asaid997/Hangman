import logo from './logo.svg';
import './App.css';
import Solution from './components/Solution'
import Score from './components/Score'
import Letters from './components/Letters'
import 'materialize-css/dist/css/materialize.css'


import React, { Component } from 'react';
class App extends Component {
  constructor(){
    super()
    this.state = {
      solution: {
        word: "CALM",
        hint: "Mood when programing"
      },
      score: 0
    }
  }

  generateLetterStatuses() {
      let letterStatus = {}
      for (let i = 65; i < 91; i++) {
        letterStatus[String.fromCharCode(i)] = false
      }
      return letterStatus
  }

  render(){
    const letters  = this.generateLetterStatuses()
    return (
      <div className="row">
            <Score score={this.state.score}/>
            <Solution letterStatus={letters} solution={this.state.solution}/>
            <Letters letterStatus={letters}/>
      </div>
    )
  }
}

export default App