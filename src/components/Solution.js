import React, { Component } from 'react';

class Solution extends Component {
    getHint(){
        return "hint"
    }
    render(){
        const arr = ['_','_','_','_']
        return (
        <div>
            <div className="center">
                {arr.map(letter => (<span>{letter} </span>))}
            </div>
            <div className="center">{this.getHint()}</div>
        </div>)
    }
}

export default Solution