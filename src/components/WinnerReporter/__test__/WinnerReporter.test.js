import React from 'react';
import ReactDom from 'react-dom';
import WinnerReporter from '../../WinnerReporter/WinnerReporter';


describe('WinnerReporter component', () => {
   
    it ('renders Winnerreporter UI corretly', ()=>{
        const div = document.createElement("div");
         ReactDom.render(<WinnerReporter/>, div);
    });
});