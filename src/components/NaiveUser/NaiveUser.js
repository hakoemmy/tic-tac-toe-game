import React from 'react';

const naiveUser = (props) => (
    <label> 
        You: <strong>{props.score}</strong>
    </label>
);

export default naiveUser;