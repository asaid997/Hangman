import React, { Component } from 'react';
import Letter from './Letter';

class Solution extends Component {

    ifWon = (score,word,letterStatus) => {
        if(score === 0)
            return -1
        if(word.split("").every(l => letterStatus[l]))
            return 1

        return 0
    }

    render(){
        const {word,hint} = this.props.solution
        const {letterStatus,score} = this.props

        const ifWon = this.ifWon(score,word,letterStatus)

        return (
        <div>
            <div className="center">
                {ifWon === 0 ? (word.split("").map(letter => (<Letter key={letter} letter={letterStatus[letter] ? letter : "_ "} />))) : 
                ifWon === 1  ? <span>Congrats you have guessed the word</span> :
                <span>Game Over... hidden word was {word}</span>}
            </div>
            <div className="center">{hint}</div>
        </div>)
    }
}

export default Solution