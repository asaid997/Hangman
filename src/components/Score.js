import React, { Component } from 'react';

class Score extends Component {
    getHint(){
        return "hint"
    }
    render(){
        const arr = ['_','_','_','_']
        return (
        <div>
            <div className="center">100</div>
        </div>)
    }
}

export default Score