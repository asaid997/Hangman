import React, { Component } from 'react';
import Letter from './Letter';

class Letters extends Component {

  
    render(){
        const {letterStatus} = this.props
        const {word} = this.props.solution

        return (
        <div className="center letters">
            <div className="">Available letters:</div>
            {Object.keys(letterStatus).map(letter => <Letter key={letter} letter={letter} selected={letterStatus[letter]} 
            partOfSolution={word.split("").find(l => l === letter)} letterClicked={this.props.letterClicked}/>)}
        </div>)
    }
}

export default Letters