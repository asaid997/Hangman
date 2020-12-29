import React, { Component } from 'react';

class Letter extends Component {

    letterClicked = () => {
        if(this.props.letterClicked)
            this.props.letterClicked(this.props.letter)
    }
  
    render(){
        const {selected,letter ,partOfSolution} = this.props
        return (
        <span className={selected ? (selected && partOfSolution ? "grey-text" : "eliminated" ): null} onClick={this.letterClicked}>
            {letter}
        </span>)
    }
}

export default Letter