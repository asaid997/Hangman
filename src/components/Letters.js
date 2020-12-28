import React, { Component } from 'react';
import Letter from './Letter';

class Letters extends Component {
    constructor(props){
        super(props)
        this.state = {
            letterStatus: this.props.letterStatus
        }
    }
  
    render(){
        const {letterStatus} = this.state
        return (
        <div className="center">
            <div className="">Available letters:</div>
            {Object.keys(letterStatus).map(letter => <Letter letter={letter} selected={letterStatus[letter]} eliminated={false}/>)}
        </div>)
    }
}

export default Letters