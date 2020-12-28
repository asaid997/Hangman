import React, { Component } from 'react';

class Score extends Component {
    constructor(props){
        super(props)
        this.state = {
            score: this.props.score
        }
    }

    getHint(){
        return "hint"
    }
    render(){
        const {score} = this.state
        return (
        <div>
            <div className="center">{score}</div>
        </div>)
    }
}

export default Score