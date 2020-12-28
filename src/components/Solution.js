import React, { Component } from 'react';

class Solution extends Component {
    constructor(props){
        super(props)
        this.state = {
            letterStatus: this.props.letterStatus,
            solution: this.props.solution
        }
    }

    render(){
        const {word,hint} = this.state.solution
        const {letterStatus} = this.state
        return (
        <div>
            <div className="center">
                {word.split("").map(letter => (
                <span>
                    {letterStatus[letter] ? letter : "_ " }
                </span>))}
            </div>
            <div className="center">{hint}</div>
        </div>)
    }
}

export default Solution