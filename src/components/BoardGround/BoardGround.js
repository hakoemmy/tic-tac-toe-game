import React from 'react';

import classes from './BoardGround.module.css';

const boardGround = (props) => (
    <div className={classes.BoardGround}>{props.symbol}</div>
);

export default boardGround;