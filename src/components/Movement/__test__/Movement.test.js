import React from 'react';
import ReactDom from 'react-dom';
import Movement from '../../Movement/Movement';

describe('Movement component', () => {
   
    it ('renders Movement part corretly', ()=>{
        const div = document.createElement("div");
         ReactDom.render(<Movement/>, div);
    });
});