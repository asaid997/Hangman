import logo from './logo.svg';
import './App.css';
import Solution from './components/Solution'
import Score from './components/Score'
import Letters from './components/Letters'
import 'materialize-css/dist/css/materialize.css'


import React, { Component } from 'react';
class App extends Component {
  constructor() {
    super()
    this.state = {
      solution: {
        word: "CALM",
        hint: "Mood when programing"
      },
      score: 100,
      letters: this.generateLetterStatuses()
    }
  }

  generateLetterStatuses() {
    let letterStatus = {}
    for (let i = 65; i < 91; i++) {
      letterStatus[String.fromCharCode(i)] = false
    }
    return letterStatus
  }

  ifPartOfWord = letter => this.state.solution.word.split("").find(l => l=== letter)

  letterClicked = letter => {
    if (!this.state.letters[letter]) {
      const letters = JSON.parse(JSON.stringify(this.state.letters))

      letters[letter] = true

      let score = this.state.score

      if(this.ifPartOfWord(letter)){}
      else score -= 10


      this.setState({letters ,score})
    }
  }

  restart = () => {
    const words = ["SALT","WATER","HARD"]
    const hints = ["flavour you add to your food","Thirsty","difficulty"]
    const random = Math.floor(Math.random() * 3);
    this.setState({solution: {
      word: words[random],
      hint: hints[random]
    },
    score: 100,
    letters: this.generateLetterStatuses()
    })
  }

  render() {
    return (
      <div className="row">
        <Score score={this.state.score} />
        <Solution letterStatus={this.state.letters} solution={this.state.solution} score={this.state.score}/>
        <Letters letterStatus={this.state.letters} solution={this.state.solution} letterClicked={this.letterClicked} />
        <button className="center" onClick={this.restart}>restart</button>
      </div>
    )
  }
}

export default App