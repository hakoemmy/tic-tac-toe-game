import React from 'react';

import classes from './Layout.module.css';
import Instructions from '../../components/Instructions/Instructions';

const layout = (props) => (
    <div className={classes.Layout}>
     <Instructions/>
    {props.children}
    </div>
);

export default layout;