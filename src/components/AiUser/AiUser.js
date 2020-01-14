import React from 'react';

const aIUser = props => (
    <label data-testid="aIScore">
          AI user: <strong>{props.score}</strong>
    </label>
); 

export default aIUser;