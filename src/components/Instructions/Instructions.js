import React from 'react';

import Aux from '../../hoc/Auxiliary/Auxiliary';
import classes from './Instructions.module.css';

const instructions = (props) => {

    return (
        <Aux>
             <h1>Tic Tac Toe Game</h1>
             <p>Play with an AI player who wins and never loses</p>
             <p>
                 <label className={classes.Warning}>Note</label>: 
                 Keep in mind that You'll be using <strong>X</strong> symbol.
             </p>
        </Aux>
    );
}

export default instructions;