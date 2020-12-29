import React, { Component } from 'react';

class Score extends Component {

    render(){
        const {score} = this.props
        return (
            <div className="center">
                <span className={score > 80 ? "green-text" : score > 40 ? "yellow-text text-accent-4" : "red-text"}>
                    {score}
                </span>
            </div>
        )
    }
}

export default Score