import React from 'react';

import classes from './BoardGround.module.css';

const boardGround = (props) => {
    if(props.symbol !== ""){
        return (<div className={classes.BoardGround}>
         {props.symbol}
        </div>);
    }
    if(props.isGameOver){
      return (<div className={classes.BoardGround}>
        {props.symbol}
       </div>);
    }
    return (<div className={classes.BoardGround}
      onClick={props.clicked}>
        {props.symbol}
        </div>);
};


export default boardGround;