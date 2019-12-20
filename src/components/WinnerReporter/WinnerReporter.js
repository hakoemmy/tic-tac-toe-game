import React from 'react';

import classes from './WinnerReporter.module.css';

const winnerReporter = (props) => {
    return (
        <div className={classes.WinnerReporter}>
         <div className={classes.Content}>
          <span className={classes.Close}>&times;</span>
          <p>AI Wins</p>
         </div>
       </div>
    );
};


export default winnerReporter;