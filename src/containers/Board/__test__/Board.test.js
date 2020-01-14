import React from 'react';
import ReactDom from 'react-dom';
import Board from '../../Board/Board';


describe('Board component', () => {
   
    it ('renders Board UI corretly', ()=>{
        const div = document.createElement("div");
         ReactDom.render(<Board/>, div);
    });
});