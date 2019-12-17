import React from 'react';

import classes from './Layout.module.css';

const layout = (props) => (
    <div className={classes.Layout}>
    <h1>Tic Tac Toe Game</h1>
    <p>Play with an AI player who wins and never loses</p>
    {props.children}
    </div>
);

export default layout;