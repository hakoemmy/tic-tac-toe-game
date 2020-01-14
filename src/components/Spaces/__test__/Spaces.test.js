import React from 'react';
import ReactDom from 'react-dom';
import Spaces from '../../Spaces/Spaces';


describe('Spaces component', () => {
   
    it ('renders Spaces UI corretly', ()=>{
        const div = document.createElement("div");
         ReactDom.render(<Spaces/>, div);
    });
});