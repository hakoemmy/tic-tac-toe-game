import React from 'react';
import ReactDom from 'react-dom';
import TurnPlayer from '../../TurnPlayer/TurnPlayer';


describe('TurnPlayer component', () => {
   
    it ('renders TurnPlayer UI corretly', ()=>{
        const div = document.createElement("div");
         ReactDom.render(<TurnPlayer/>, div);
    });
});