import React from 'react';
import ReactDom from 'react-dom';
import Intructions from '../../Instructions/Instructions'

describe('Instructions component', () =>{
 
    it ('renders instructions section corretly', ()=>{
        const div = document.createElement("div");
         ReactDom.render(<Intructions/>, div);
    });
})