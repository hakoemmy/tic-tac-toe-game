import React from 'react';

import classes from './WinnerReporter.module.css';

const winnerReporter = (props) => {
    if(props.isGameOver){ 
        return (
            <div className={classes.WinnerReporterActive}>
             <div className={classes.Content}>
              <span
               className={classes.Close}
               onClick={props.clicked}>
                   &times;</span>
              <p>{(props.winnerSymbol === 'O')? 'AI Won!': 'You Won!'}</p>
             </div>
           </div>
        );
    }
    return (
        <div className={classes.WinnerReporterInactive}>
         <div className={classes.Content}>
          <span className={classes.Close}>&times;</span>
         <p>{(props.winnerSymbol === 'O')? 'AI Won!': 'You Won!'}</p>
         </div>
       </div>
    );
};


export default winnerReporter;