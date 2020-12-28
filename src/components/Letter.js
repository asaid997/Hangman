import React, { Component } from 'react';

class Letter extends Component {
  
    render(){
        const {selected,letter ,eliminated} = this.props
        return (
        <span className={selected ? "grey-text" : eliminated ? "eliminated" : null}>
            {letter}
        </span>)
    }
}

export default Letter